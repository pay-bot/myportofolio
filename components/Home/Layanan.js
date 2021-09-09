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
      <div ref={ref} className="lg:w-9/12 w-full items-center flex mx-auto lg:px-0 md:px-8 px-4 mt-2  dark:bg-[#192949]    bg-[#EAECF4]  ">
        <motion.div className="py-10 rounded border border-4 border-[#008FFF] dark:border-[#45ADFF] "
          animate={animation}>
          <div className=" mx-auto ">
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