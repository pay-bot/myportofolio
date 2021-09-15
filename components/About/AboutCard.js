import Link from "next/link"
import { useTranslation } from 'next-i18next';
import Image from "next/image"
import AboutId from "./AboutId";
import AboutSocial from "./AboutSocial";


export default function AboutCard() {
  const { t } = useTranslation('common');

  return (
    <>
      <div className=" dark:bg-gradient-to-t dark:from-blue-600 dark:via-gray-700 dark:to-gray-900 border-gray-600 dark:border-gray-600 bg-gradient-to-t from-gray-100 via-gray-200 to-[#EAECF4]dark:text-gray-100 mx-auto flex lg:flex-row flex-col lg:mb-0 p-3 mb-5 ">
        <div className="lg:w-4/12 md:w-3/12 w-full lg:m-3 mx-auto relative h-[280px]">
          <Image data-aos="zoom-in" src="/code.webp" layout="fill"
            objectFit="fill" className=" " alt="" />
        </div>
        <div className="lg:w-8/12 w-full lg:m-3  mx-auto ">
          <div className="flex items-center h-full">
            <div className="mx-auto lg:mt-0 mt-4 ">
              <div className="py-5">
                <p data-aos="fade-left" className="mb-5 text-gray-800 dark:text-gray-100 text-justify">
                  {t("about.p")}</p>
                <AboutId
                />
              </div>
              <AboutSocial />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}