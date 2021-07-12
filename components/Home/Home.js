import CarouselItem from "./CarouselItem"
import Greeting from "./Greeting"
import ProfileCard from "./ProfileCard";
import SkillsTitle from "./SkillsTitle";
import Layanan from "./Layanan";
import SertifikatItem from "./SertifikatItem";
import { motion, useAnimation } from "framer-motion"
import Citation from "./Citation";
import React, { useEffect, useState } from "react";
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useInView } from 'react-intersection-observer';

export default function Home() {
  
  const [citation, setCitation] = useState(true);
  
  useEffect(() => {
    const ids = [
      setTimeout(() => setCitation(false), 4800),
    ];
    
    return () => ids.forEach((id) => clearTimeout(id));
  }, [setCitation]);

  const { ref, inView} = useInView({
    threshold: 0,
  });
  const animation = useAnimation();

  useEffect(() => {

    if (inView) {
      animation.start({
        y: 0,
        transition: {
          y: {duration: 2,stiffness: 1000, velocity: -100 }
        
        }
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        transition: {
          y: { stiffness: 1000 }}})
    }
  },
    [inView]);

  return (
    <>
      <Citation citation={citation} />
      <div className="lg:w-9/12 w-11/12 flex md:flex-row flex-col my-auto lg:h-screen h-full items-center justify-center mx-auto px-4 lg:mt-0 mt-24 lg:mb-[0px] mb-[88px]">
        <motion.div className="md:w-6/12 w-full mx-auto mb-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>
          <Greeting />
        </motion.div>
        <motion.div className="md:w-6/12  relative w-full mx-auto flex md:flex-row justify-center flex-col lg:mt-6 mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>
          <div className="rounded-full mx-auto relative lg:h-[400px] lg:w-[400px] h-[330px] w-[330px] px-5 border-4 border-green-500 hover:border-green-400 ">
            <img src="mongodb.svg" alt="" className="ml-4 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 border glassmorphism-25 hover:bg-gray-400 z-10" />
            <img src="expressjs.svg" alt="" className="right-8 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 border glassmorphism-25 hover:bg-gray-400 z-10" />
            <img src="react-2.svg" alt="" className="lg:-ml-14 -ml-9 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 mt-52 border glassmorphism-25 hover:bg-gray-400" />
            <img src="node-js.svg" alt="" className="lg:-right-8 -right-3 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 mt-52 border glassmorphism-25 hover:bg-gray-400" />
            <img src="fix porto.png" alt="" className=" absolute lg:h-[500px] h-[415px] " />
          </div>
        </motion.div>
      </div>
      <div ref={ref} className="mt-2 bg-gradient-conic-t from-gray-900 via-gray-100 to-gray-900 dark:bg-gradient-to-r dark:from-blue-gray-800 dark:via-blue-800 dark:to-blue-gray-800 ">
        <motion.div className="mb-10 md:p-5 p-0 "
          animate={animation}>
          <Layanan />
        </motion.div>
      </div>
      <div className="flex flex-col w-9/12 mx-auto lg:p-5 p-0">
        <SkillsTitle>Keterampilan saya</SkillsTitle>
        <CarouselItem />
      </div>
      <div className="lg:w-9/12 w-11/12 mx-auto mb-10 p-5">
        <p className="mt-0 mb-5 font-semibbold md:text-4xl text-3xl dark:text-gray-200 text-center">Sertifikat</p>
        <SertifikatItem />
      </div>

    </>
  )
}