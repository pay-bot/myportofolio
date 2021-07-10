import CarouselItem from "./CarouselItem"
import Greeting from "./Greeting"
import ProfileCard from "./ProfileCard";
import SkillsTitle from "./SkillsTitle";
import Layanan from "./Layanan";
import SertifikatItem from "./SertifikatItem";
import { motion } from "framer-motion"
import Citation from "./Citation";
import React, { useEffect, useState } from "react";
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'

export default function Home() {
  const container = {
    hidden: {
      opacity: 0,

    },
    show: {
      opacity: 1,
      transition: {
        staggerDirection: 1,
        duration: 1.5
      },
      y: -250,
    },
  };

  const [citation, setCitation] = useState(true);

  useEffect(() => {
    const ids = [
      setTimeout(() => setCitation(false), 4800),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [setCitation]);


  return (
    <>
      <Citation citation={citation} />
      <div className="lg:w-9/12 w-11/12 flex md:flex-row flex-col my-auto h-screen items-center justify-center mx-auto px-4 ">
        <motion.div className="md:w-6/12 w-full mx-auto mb-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>
          <Greeting />
        </motion.div>
        <motion.div className="md:w-6/12 w-full  flex md:flex-row flex-col rounded-full  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>
            <CustomCard
                effectColor="#C780FF" // required
                color="#14AEFF" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <h1>Hello</h1>
                <p>This is an example</p>
            </CustomCard>
        </motion.div>
      </div>
      <div className="mb-10 p-5 bg-gradient-conic-t from-gray-900 via-gray-100 to-gray-900 dark:bg-gradient-to-r dark:from-blue-gray-800 dark:via-blue-800 dark:to-blue-gray-800 ">
        <Layanan />
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