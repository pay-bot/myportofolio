import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import AboutId from './AboutId';
import AboutSocial from './AboutSocial';

export default function AboutCard() {
  const { t } = useTranslation('common');

  return (
    <>
      <div className=" flex dark:bg-gradient-to-t dark:from-blue-600 dark:via-gray-700 dark:to-gray-900 border-gray-600 dark:border-gray-600 bg-white dark:text-gray-100 mx-auto lg:mb-0  mb-5 pt-8 px-4 ">
       
        <div className="lg:w-8/12 w-full lg:m-3  mx-auto ">
          <div className="flex items-center h-full">
            <div className="mx-auto lg:mt-0 mt-4 ">
              <div className="py-5">
                <p className="">I Learn Through Experiences</p>
                <p
                  data-aos="fade-left"
                  className="mb-5 text-gray-800 dark:text-gray-100 text-justify"
                >
                  {t('about.p')}
                </p>
                <AboutId />
              </div>
              <AboutSocial />
            </div>
          </div>
        </div>
        <div className="lg:w-4/12 h-96 pt-20 -mr-10  md:w-3/12 w-full flex justify-end  ml-auto relative  ">
          <Image
            data-aos="zoom-in"
            src="/fahrial.png"
            layout="fill"
            objectFit=""
            // width=
            className="mt-20  custom-img -mr-20 flex"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
