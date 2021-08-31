import Logo from "./Logo";
import Nav from "./Nav";
import { useState, useEffect } from 'react';
import useDarkMode from "../../hooks/useDarkMode";
import classnames from "classnames";
import en from '../../locales/en';
import id from '../../locales/id';
import { useRouter } from 'next/router'

export default function Navbar() {
  const { pathname } = useRouter()
  const [offcanvas, setOffcanvas] = useState(false);
  useEffect(() => setOffcanvas(false), [pathname])
  const { toggleDarkMode, darkMode } = useDarkMode();


  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : id;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <>
      <div className="fixed z-50 w-full h-[80px]  bg-[#F4F4FB] dark:bg-[#2E3D60]   shadow-xl">
        <div className="lg:w-9/12 w-11/12 flex mx-auto">
          <div className="w-3/12 my-auto z-30 ">
            <Logo href="/">FA</Logo>
          </div>
          <div className="w-6/12 lg:block hidden ">

            <Nav dir="horizontal" />
          </div>
          <div className="lg:w-3/12 w-full flex z-30">
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="ml-auto mr-2 lg:pt-0 pt-5 text-black dark:text-white text-shadow-sm text-lg bg-transparent hover:cursor-pointer"
          >
            <option className="text-black pt-5" value="id">ID 🇮🇩</option>
            <option className="text-black pt-5" value="en">EN 🇬🇧</option>
            </select>
            <button
              className="mt-6 h-8 px-2 border-2 border-blue-600 rounded bg-gray-500 dark:bg-white my-auto mr-3"
              type="button"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 25 25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1.3em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <circle cx={12} cy={12} r={3} />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 25 25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1.3em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>
          <div className="w-6/12 -ml-20 lg:-ml-0 md:-ml-52 lg:hidden text-right">
            <img src="/menu.svg" className="cursor-pointer inline-block mt-6 mr-5 w-8" onClick={() => setOffcanvas(true)} />
          </div>
          <div className={classnames("fixed bg-white dark:bg-gray-900 mt-3 h-full w-full py-10 pl-10 md:block transition-all z-50", offcanvas ? "right-0" : "-right-full")}>
            <img src="/X.svg" className="cursor-pointer absolute top-3 right-10 w-8" onClick={() => setOffcanvas(false)} />
            <Nav
              dir="vertical"
            />
          </div>
        </div>

      </div>
    </>
  )
}