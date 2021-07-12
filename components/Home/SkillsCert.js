import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import React, { useState, useEffect } from "react";
import SkillsTitle from "./SkillsTitle";
import SertifikatItem from "./SertifikatItem";
import CarouselItem from "./CarouselItem"




export default function SkillsCert() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const animation = useAnimation();

  useEffect(() => {

    if (inView) {
      animation.start({
        y: 0,
        transition: {
          y: { duration: 2, stiffness: 1000, velocity: -100, type: 'spring', bounce: 0.3 }

        }
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        transition: {
          y: { stiffness: 1000 }
        }
      })
    }
  },
    [inView]);
  return (
    <>
      <div ref={ref} className="">
        <motion.div className=""
      animate={animation}>

          <div className="w-9/12 mx-auto lg:p-5 p-0">
            <SkillsTitle>Keterampilan saya</SkillsTitle>
            <CarouselItem />
          </div>
          <div className="lg:w-9/12 w-11/12 mx-auto mb-10 p-5">
            <p className="mt-0 mb-5 font-semibbold md:text-4xl text-3xl dark:text-gray-200 text-center">Sertifikat</p>
            <SertifikatItem />
          </div>
        </motion.div>
      </div>

    </>
  )
}
