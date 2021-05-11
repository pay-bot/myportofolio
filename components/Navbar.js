import Logo from "./Logo";
import Nav from "./Nav";
import { useState, useEffect } from 'react';
import useDarkMode from "../hooks/useDarkMode";
import classnames from "classnames";
import { useRouter } from 'next/router'

export default function Navbar() {
  const { pathname } = useRouter()
  const [offcanvas, setOffcanvas] = useState(false);
  useEffect(() => setOffcanvas(false), [pathname])
  const { toggleDarkMode, darkMode } = useDarkMode();


  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="fixed w-full h-[80px]  bg-white shadow-xl">
        <div className="lg:w-9/12 w-full flex mx-auto">
          <div className="w-3/12 my-auto z-30 ">
            <Logo>FA</Logo>
          </div>
          <div className="w-6/12 lg:block hidden ">

            <Nav dir="horizontal" scheme="dark" />
          </div>
          <div className="lg:w-3/12 w-full flex z-30">
            <button
              className="mt-6 h-8 px-2 border-2 border-blue-600 rounded bg-gray-500 dark:bg-white my-auto ml-auto lg:mr-5 mr-0"
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
          <div className="w-6/12 -ml-16 lg:-ml-0 md:-ml-52 lg:hidden text-right">
            <img src="/menu.svg" className="cursor-pointer inline-block mt-6 mr-5 w-8" onClick={() => setOffcanvas(true)} />
          </div>
          <div className={classnames("fixed bg-white t mt-3 h-full w-full py-10 pr-10 pl-5 md:block transition-all", offcanvas ? "right-0" : "-right-full")}>
            <img src="/X.svg" className="cursor-pointer absolute top-3 right-5 w-8" onClick={() => setOffcanvas(false)} />
            <Nav
              scheme="dark"
              dir="vertical"
            />
          </div>
        </div>

      </div>
    </>
  )
}