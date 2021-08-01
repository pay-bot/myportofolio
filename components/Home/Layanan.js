import LayananCard from "./LayananCard"
import LayananCardTitle from "./LayananCardTitle"
import LayananTitle from "./LayananTitle"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react";
import { useTranslation } from 'next-i18next';




export default function Layanan() {

  const { t } = useTranslation('common');

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
        <LayananTitle>{t("service.title")}</LayananTitle>
        <div className="p-5">
          <LayananCardTitle>{t("service.favorite")}</LayananCardTitle>
          <div className="w-full mx-auto flex lg:flex-row flex-col">
            <LayananCard
              image="/images/next.svg"
              item="NextJS"
              description={t("service.next")}
            />
            <LayananCard
              image="/images/tailwind.svg"
              item="Tailwind"
              description={t("service.tailwind")}
            />
          </div>
          <LayananCardTitle>{t("service.discipline")}</LayananCardTitle>
          <div className="w-full mx-auto flex lg:flex-row flex-col">

            <LayananCard
              image="responsive.svg"
              item={t("service.responsive")}
              description={t("service.presponsive")}
            />
            <LayananCard
              image="cleancode.png"
              item={t("service.clean")}
              description={t("service.pclean")}
              
            />
          </div>
        </div>
      </div>
      </motion.div>
      </div>
    </>
  )
}