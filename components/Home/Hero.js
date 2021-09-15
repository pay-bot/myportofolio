import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';
import { RESUME } from "./resume"
import Link from "next/link"
import Image from 'next/image'
import Particles from 'react-particles-js';
import React from "react";


export default function Hero() {
  const { t } = useTranslation('common');
  const particlesOption = {
    particles: {
      "number": {
        "value": 20
    },
    "size": {
        "value": 3
    },
    "color": {
      "value": "#0000ff"
    },
    "line_linked": {
      "enable": true,
      "color": "#00B4D8",
      "opacity": 0.4,
    },
  
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
      },
    }
  }

  const particlesOff = {
    particles: {
      "number": {
        "value": 0
    },
    "size": {
        "value": 0
    },
  }
}

 
  return (
    <>

      <Particles params={particlesOption} className="w-full h-full absolute  " />
      <div className="lg:w-8/12 w-full flex md:flex-row flex-col lg:h-screen  mx-auto lg:px-0 md:px-8 px-4 relative lg:mt-0 mt-24 ">

        <motion.div className=" md:w-6/12 w-full items-center md:justify-start justify-center flex "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}>
          <div className="md:text-left text-center ">
            <p className="text-5xl  font-bold my-1 dark:text-white">{t("greeting.p1")}</p>
            <p className="text-5xl font-bold my-1  dark:text-white">{t("greeting.p2")}<span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400"> Fahri</span>
            </p>

            <div className=" text-5xl font-bold my-1 text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400 ">
              <Typewriter
                options={{
                  strings: ['Front End', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              /></div>
            <div className="flex md:justify-start justify-center">

            </div>

          </div>
        </motion.div>
        <motion.div className=" md:w-6/12 relative h-full w-full  flex md:flex-row md:justify-center flex-col md:items-end items-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}>
          <div className="mx-auto rounded-full absolute lg:h-[400px] lg:w-[400px] md:h-[340px] md:w-[340px] h-[330px] w-[330px] mb-24 px-5 border-4 border-[#008FFF] dark:border-[#45ADFF] ">

            <Link href="https://reactjs.org/"><a className="ml-4 flex absolute animate-wiggle lg:w-20 lg:h-20 w-16 h-16  rounded-full  nm-inset-white-100 dark:nm-inset-gray-100 z-30 items-center"><img src="react-2.svg" alt="" className="p-2" /></a></Link>
            <Link href="https://v3.vuejs.org"><a className="right-8 flex absolute animate-wiggle lg:w-20 lg:h-20 w-16 h-16 rounded-full  nm-inset-white-100 dark:nm-inset-gray-100 z-30  "><img src="vue.svg" alt="" className="p-2 mt-2 ml-1" /></a></Link>
            <Link href="https://laravel.com/"><a className="lg:-ml-14 -ml-9 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 rounded-full p-2 mt-52 nm-inset-white-100 dark:nm-inset-gray-100 "><img src="laravel.svg" alt="" className="p-1" /></a></Link>
            <Link href="https://tailwindcss.com/"><a className="lg:-right-7 -right-3 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20  rounded-full p-2 mt-52 nm-inset-white-100 dark:nm-inset-gray-100 "><img src="tailwind.svg" alt="" /></a></Link>

          </div>
            <div className=" relative w-3/4 lg:h-[500px] h-[420px]  ">
              <Image src="/porto.png" alt="" layout="fill" 
                objectFit="fill" className="" priority={true} />
            </div>
        </motion.div>
      </div>

    </>
  )
}