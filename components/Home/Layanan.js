import LayananCard from "./LayananCard"
import LayananCardTitle from "./LayananCardTitle"
import LayananTitle from "./LayananTitle"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react";




export default function Layanan() {

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
    <div ref={ref} className="mt-2 bg-gradient-conic-t from-gray-900 via-gray-100 to-gray-900 dark:bg-gradient-to-r dark:from-blue-gray-800 dark:via-blue-800 dark:to-blue-gray-800 ">
    <motion.div className="mb-10 md:p-5 p-0 "
      animate={animation}>
      <div className="lg:w-9/12 w-11/12 mx-auto py-10">
        <LayananTitle>Layanan terbaik saya</LayananTitle>
        <div className="p-5">
          <LayananCardTitle>Favorite</LayananCardTitle>
          <div className="w-full mx-auto flex lg:flex-row flex-col">
            <LayananCard
              image="/images/next.svg"
              item="NextJS"
              description="NextJS membantu saya untuk menciptakan aplikasi yang powerfull dan mudah saya kontrol dengan segala fitur yang dimilikinya.
              "
            />
            <LayananCard
              image="/images/tailwind.svg"
              item="Tailwind"
              description="Tailwind CSS membantu saya membuat kit komponen yang mudah untuk saya custom.
              "
            />
          </div>
          <LayananCardTitle>Disiplin</LayananCardTitle>
          <div className="w-full mx-auto flex lg:flex-row flex-col">

            <LayananCard
              image="responsive.svg"
              item="Responsive"
              description="Membuat aplikasi responsive adalah suatu kewajiban untuk saya, agar pengguna dapat menikmati aplikasi saya di berbagai platform.
              "
            />
            <LayananCard
              image="cleancode.png"
              item="Clean Code"
              description="Membuat kode program yang bersih adalah ambisi saya, dengan kode yang bersih saya dapat dengan mudah menemukan bug pada aplikasi saya.
              "
            />
          </div>
        </div>
      </div>
      </motion.div>
      </div>
    </>
  )
}