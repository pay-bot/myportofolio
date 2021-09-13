import LayananCard from "./LayananCard"
import LayananCardTitle from "./LayananCardTitle"
import Title from "../Title"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react";
import { useTranslation } from 'next-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from "../About/About"
import Index from "../Skills/Index"



export default function Layanan() {

  const { t } = useTranslation('common');

  
  return (
    <>
      <div className="w-full items-center flex mx-auto  dark:bg-[#273658]  mb-5  bg-[#EAECF4]  ">
        <div className="lg:w-8/12 w-full mx-auto py-5 rounded lg:px-0 md:px-8 px-4 "
          >
            <div className="" >
    <About />
    <Index />
            <Title>{t("service.title")}</Title>
              <LayananCardTitle>{t("service.favorite")}</LayananCardTitle>
              <div data-aos="fade-up-right" className="w-full mx-auto flex lg:flex-row flex-col">
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
              <div data-aos="fade-up-left" className="w-full mx-auto flex lg:flex-row flex-col">

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
      </div>
    </>
  )
}