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
              className="ml-auto mx-4 appearance-none focus:border-none  text-black dark:text-white text-shadow-sm text-lg bg-transparent hover:cursor-pointer"
            >
              <option className="text-black " value="id">ID 🇮🇩</option>
              <option className="text-black " value="en">EN 🇬🇧</option>
            </select>
            <button
              className="h-8  z-50 p-2 rounded-full dark:nm-convex-yellow-100 nm-convex-gray-900 flex  items-center transition-all"
              type="button"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <img src="sun.svg" alt="" className="w-5 h-5" />
              ) : (
                <img src="moon.svg" alt="" className="w-5 h-5" />

              )}
            </button>
          </div>
          
        </div>

      </div>
    </>
  )
}