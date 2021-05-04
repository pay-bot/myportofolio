import Link from 'next/link';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../hooks/useDarkMode";



function Wrapper({ router, children }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Skills', href: '/skills' },
    { text: 'Project', href: '/project' },
    { text: 'Contact', href: '/contact' },

    // { text: '', href: '' },
  ];
  const { toggleDarkMode, darkMode } = useDarkMode();


  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);



  return (

    <>
      <nav className='inset-x-0 flex sm:h-full bg-grey-300 dark:bg-gray-700 lg:justify-around shadow-lg p-3'>

        <div className="lg:block">
          <Link href="/"><a className="lg:w-full sm:mr-auto items-center  lg:block lg:mr-auto text-2xl text-indigo-600 font-bold uppercase tracking-wide ml-10 mt-3 ">Fa</a></Link>
        </div>
        <div className="sm:mx-auto">
          <div className='sm:items-start sm:ml-3.5 lg:w-auto sm:h-full w-full lg:items-right text-center flex  lg:h-auto'>
            <ul className={click ? "lg:ml-auto hidden sm:h-500 w-full lg:inline-flex lg:w-auto lg:items-right  sm:items-center " : "lg:ml-auto lg:items-right  sm:flex-wrap sm:space-y-5 justify-center sm:items-center sm:relative lg:inline-flex lg:w-auto "}>
              {navs.map(nav => (
                <li key='id'><Link href={nav.href}><a className={` lg:ml-auto sm:flex-wrap lg:inline-flex lg:w-auto w-full sm:py-5 px-8 py-5 justify-around rounded text-black text-xl uppercase dark:text-white font-bold hover:bg-indigo-600 hover:text-white lg:items-right ${router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a></Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <button
              className=" mt-2.5 px-3 py-3 sm:py-2 bg-gray-400 focus-ring dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-white duration-300 rounded-sm shadow-lg ring lg:relative lg:flex justify-end "
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
          <div>
            <div className=' sm:flex flex-col p-3 sm:ml-3 ring sm:z-10 hover:bg-indigo-600 rounded lg:hidden text-black dark:text-white lg:ml-auto py-2.6 sm:ml-15 mt-2 hover:text-white outline-none ' onClick={handleClick}>
              <FontAwesomeIcon icon={click ? faBars : faTimes}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </nav >

      <main className="flex-grow p-8 dark:bg-gray-700">{children}

      </main>
      <div className="w-full dark:bg-gray-700 mx-auto">
        <div className=" border-t-2 border-gray-300">
          <p className="text-center text-sm text-blue-700 font-bold p-10">
            © 2021 Build with Nextjs & Tailwind
                </p>
        </div>
      </div>

    </>
  )
    ;
}

export default withRouter(Wrapper);