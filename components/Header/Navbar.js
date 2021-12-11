import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Emoji from 'a11y-react-emoji';
import useDarkMode from '../../hooks/useDarkMode';
import Nav from './Nav';
import { useCookies } from "react-cookie";
import Link from "next/link";

const languageNames = {
  id: "ID 🇮🇩",
  en: "EN 🇬🇧",
};

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  useEffect(() => setOffcanvas(false), []);
  const { toggleDarkMode, darkMode } = useDarkMode();
  const { asPath, locale: activeLocale, locales } = useRouter();
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"]);
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
          <ul className="flex gap-x-2 mr-auto">
      {locales.map((locale) => (
        <li key={locale}>
          <Link href={asPath} locale={locale}>
            <a
            className="dark:text-white text-black"
              hrefLang={locale}
              aria-current={locale === activeLocale ? "page" : null}
              onClick={() => {
                if (cookie.NEXT_LOCALE !== locale) {
                  setCookie("NEXT_LOCALE", locale, { path: "/" });
                }
              }}
            >
              {languageNames[locale]}
            </a>
          </Link>
        </li>
      ))}
    </ul>
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
