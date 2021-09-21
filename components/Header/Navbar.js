import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useDarkMode from '../../hooks/useDarkMode';
import Nav from './Nav';
import Emoji from 'a11y-react-emoji';

export default function Navbar() {
  const { pathname } = useRouter();
  const [offcanvas, setOffcanvas] = useState(false);
  useEffect(() => setOffcanvas(false), [pathname]);
  const { toggleDarkMode, darkMode } = useDarkMode();

  const router = useRouter();
  const { locale } = router;

  const changeLanguage = e => {
    const local = e.target.value;
    router.push(router.pathname, router.asPath, { local });
  };
  return (
    <>
      <div className="fixed z-50 md:py-1 py-4 w-full bg-white dark:bg-[#1A2744] transform transition duration-500  shadow-md">
        <div className=" lg:w-8/12 w-11/12 flex mx-auto ">
          <div className="w-2/12  items-center flex md:hidden  ">
            <div className="relative cursor-pointer h-12 w-8">
              <Image
                src="/menu.svg"
                alt=""
                className=""
                layout="fill"
                objectFit="fill"
                loading="eager"
                priority
                quality={100}
                onClick={() => setOffcanvas(true)}
              />
            </div>
          </div>
          <div
            className={classnames(
              '-mt-4 fixed bg-white dark:bg-gray-900 h-screen w-full md:block transition-all z-50 ',
              offcanvas ? 'left-0' : '-left-full'
            )}
          >
            <div className="relative cursor-pointer h-12 w-8 mt-4 ml-4">
              <Image
                src="/X.svg"
                alt=""
                className=""
                layout="fill"
                objectFit="fill"
                loading="eager"
                priority
                quality={100}
                onClick={() => setOffcanvas(false)}
              />
            </div>
            <Nav dir="vertical" />
          </div>

          <Nav dir="horizontal" />
          <div className="md:w-2/12 w-full ml-auto items-center flex z-30">
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="ml-auto mx-4 appearance-none focus:border-none  text-black dark:text-white text-shadow-sm text-lg bg-transparent hover:cursor-pointer"
            >
              <option className="text-black " value="id">
                ID 🇮🇩
              </option>
              <option className="text-black " value="en">
                EN 🇬🇧
              </option>
            </select>
            <button
              className="w-8 h-8 relative z-50 flex rounded-full dark:nm-convex-yellow-100 nm-convex-gray-900 flex  items-center transition-all"
              type="button"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Image
                  src="/sun.svg"
                  alt=""
                  className=""
                  layout="fill"
                  objectFit="fill"
                  loading="eager"
                  priority
                />
              ) : (
                <Image
                  src="/moon.svg"
                  alt=""
                  className=""
                  layout="fill"
                  objectFit="fill"
                  loading="eager"
                  priority
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
