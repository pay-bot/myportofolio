import Logo from "./Logo";
import Nav from "./Nav";
import { useState, useEffect } from 'react';
import useDarkMode from "../../hooks/useDarkMode";
import classnames from "classnames";
import { useRouter } from 'next/router'

export default function Navbar() {
  const { pathname } = useRouter()
  const [offcanvas, setOffcanvas] = useState(false);
  useEffect(() => setOffcanvas(false), [pathname])
  const { toggleDarkMode, darkMode } = useDarkMode();

  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <>

      <div className="fixed z-50 md:py-1 py-4 w-full bg-white dark:bg-[#1A2744] transform transition duration-500  shadow-md">
        <div className=" lg:w-8/12 w-11/12 flex mx-auto ">
        <div className="w-2/12  items-center flex md:hidden  ">
            <img src="/menu.svg" className="cursor-pointer h-12 w-8" onClick={() => setOffcanvas(true)} />
          </div>
          <div className={classnames("-mt-4 fixed bg-white dark:bg-gray-900 h-screen w-full md:block transition-all z-50 ", offcanvas ? "left-0" : "-left-full")}>
            <img src="/X.svg" className="cursor-pointer absolute top-5 left-4 w-8" onClick={() => setOffcanvas(false)} />
            <Nav
            dir="vertical"
            />
          </div>
          
            <Nav dir="horizontal" />
          <div className="md:w-2/12 w-full ml-auto items-center flex z-30">
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="ml-auto mx-2 appearance-none focus:border-none  text-black dark:text-white text-shadow-sm text-lg bg-transparent hover:cursor-pointer"
            >
              <option className="text-black " value="id">ID 🇮🇩</option>
              <option className="text-black " value="en">EN 🇬🇧</option>
            </select>
            <button
              className="h-8  z-50 px-2 border-2 border-blue-600 rounded bg-gray-500 dark:bg-white flex  items-center"
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
          
        </div>

      </div>
    </>
  )
}