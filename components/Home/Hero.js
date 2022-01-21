import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import Particles from 'react-particles-js';
import React from 'react';
import { buildUrl } from 'cloudinary-build-url';

export default function Hero() {
  const { t } = useTranslation('common');
  const particlesOption = {
    particles: {
      number: {
        value: 20
      },
      size: {
        value: 3
      },
      color: {
        value: '#0000ff'
      },
      line_linked: {
        enable: true,
        color: '#00B4D8',
        opacity: 0.4
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    }
  };

  const urlBlurred = buildUrl('portofolio/porto_nru7iy', {
    cloud: {
      cloudName: 'ds48xxpds'
    },
    transformations: {
      quality: 1
    }
  });

  return (
    <>
      <Particles
        params={particlesOption}
        className="absolute left-0"
      ></Particles>
      <div className="relative flex flex-col w-full px-4 mx-auto mt-24 lg:w-8/12 md:flex-row lg:px-0 md:px-8 lg:mt-32 ">
        <motion.div
          className="flex items-center justify-center w-full md:w-6/12 md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center md:text-left ">
            <p className="my-1 text-5xl font-bold dark:text-white">
              {t('greeting.p1')}
            </p>
            <p className="my-1 text-5xl font-bold dark:text-white">
              {t('greeting.p2')}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400">
                {' '}
                Fahri
              </span>
            </p>

            <div className="my-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400">
              <Typewriter
                options={{
                  strings: ['Front End', 'Web Developer'],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>
            <div className="flex justify-center md:justify-start" />
          </div>
        </motion.div>
        <div className="relative flex flex-col items-center w-full h-full mt-10 md:w-6/12 md:flex-row md:justify-center md:items-end lg:mt-0">
          <div className="mx-auto rounded-full absolute xl:h-[50vh] lg:h-[400px] lg:w-[400px] md:h-[340px] md:w-[340px] h-[330px] w-[330px]  px-5 border-4 border-[#008FFF] dark:border-[#45ADFF] ">
            <Link href="https://reactjs.org/">
              <a className="absolute z-30 flex items-center w-16 h-16 ml-4 rounded-full animate-wiggle lg:w-20 lg:h-20 nm-inset-white-100 dark:nm-inset-gray-100">
                <img src="react-2.svg" alt="" className="p-2" />
              </a>
            </Link>
            <Link href="https://v3.vuejs.org">
              <a className="absolute z-30 flex w-16 h-16 rounded-full right-8 animate-wiggle lg:w-20 lg:h-20 nm-inset-white-100 dark:nm-inset-gray-100 ">
                <img src="vue.svg" alt="" className="p-2 mt-2 ml-1" />
              </a>
            </Link>
            <Link href="https://laravel.com/">
              <a className="absolute flex w-16 h-16 p-2 rounded-full lg:-ml-14 -ml-9 animate-wiggle lg:w-20 lg:h-20 mt-52 nm-inset-white-100 dark:nm-inset-gray-100 ">
                <img src="laravel.svg" alt="" className="p-1" />
              </a>
            </Link>
            <Link href="https://tailwindcss.com/">
              <a className="absolute flex w-16 h-16 p-2 rounded-full lg:-right-7 -right-3 animate-wiggle lg:w-20 lg:h-20 mt-52 nm-inset-white-100 dark:nm-inset-gray-100 ">
                <img src="tailwind.svg" alt="" />
              </a>
            </Link>
          </div>
          <div className="relative w-full  2xl:h-[65vh] xl:h-[50vh]">
            <Image
              src={urlBlurred}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
              priority
              quality={100}
              placeholder="blur"
              blurDataURL={urlBlurred}
            />
          </div>
        </div>
      </div>
    </>
  );
}
