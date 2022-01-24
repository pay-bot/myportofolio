import { useState, useEffect } from "react";
import classnames from "classnames";
import { useRouter } from "next/router";
import Image from "next/image";
import Emoji from "a11y-react-emoji";
import useDarkMode from "../../hooks/useDarkMode";
import Nav from "./Nav";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

const languageNames = {
  id: "ID 🇮🇩",
  en: "EN 🇬🇧",
};

export default function Navbar() {
  const dispatch = useDispatch();
  const [offcanvas, setOffcanvas] = useState(false);
  useEffect(() => setOffcanvas(false), []);
  const { toggleDarkMode, darkMode } = useDarkMode();
  const { asPath, locale: activeLocale, locales } = useRouter();
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"]);
  return (
    <>
      <div className="z-50 xl:py-8 md:py-1 py-4 w-full bg-white dark:bg-[#1A2744] transform transition duration-500  ">
        <div className="flex w-11/12 mx-auto lg:w-8/12">
          <div className="flex items-center w-2/12 md:hidden ">
            <div className="relative w-8 h-12 cursor-pointer">
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
              "-mt-4 fixed bg-white dark:bg-gray-900 h-screen w-full md:block transition-all z-50 ",
              offcanvas ? "left-0" : "-left-full"
            )}
          >
            <div className="relative w-8 h-12 mt-4 ml-4 cursor-pointer">
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
          <div className="z-30 flex items-center w-full ml-auto md:w-2/12">
            <ul className="flex mr-auto gap-x-2">
              {locales.map((locale) => (
                <li key={locale}>
                  <Link href={asPath} locale={locale}>
                    <a
                      className="text-black dark:text-white"
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
            {/* <ul className='header-left'>
        <li
          onClick={() =>
            dispatch(
              openModal({
                name: 'Login',
                childrenProps: { name: 'kareem', email: 'kareem@gmail.com' },
              })
            )
          }
        >
          Login
        </li>
        <li
          onClick={() =>
            dispatch(openModal({ name: 'Register', position: 'bottom' }))
          }
        >
          Register
        </li>
      </ul> */}
            <button
              className="relative z-50 flex items-center w-8 h-8 transition-all rounded-full dark:nm-convex-yellow-100 nm-convex-gray-900"
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
