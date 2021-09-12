import React from 'react'
import Form from "./Form"
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';
import Title from "../../Title"
import Description from "../../Description"
import { fadeIn } from 'react-animations'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

export default function Contact() {
  const { t } = useTranslation('common');

  const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

  return (
    <>
    
      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id="hire" className=" lg:w-8/12 w-full mx-auto flex lg:flex-row flex-col mt-24 lg:px-0 md:px-8 px-4"
        >
        <div  className="lg:w-6/12 w-full mr-5 ">
          <Title>{t("hire.title")}</Title>
          <Description>{t("hire.p")}</Description>
          <div className="mt-5 flex text-black dark:text-gray-100 text-md font-semibold"><img src="location.svg" className="w-6 mx-2 " />{t("hire.address")}</div>
          <p className="ml-10 mb-7 dark:text-gray-200">Depok, Jawa Barat</p>
          <div className="flex text-black text-md font-semibold dark:text-gray-100"><img src="phone.svg" className="w-6 mx-2 " />Phone</div>
          <p className="ml-10 mb-7 dark:text-gray-200 ">08984629140</p>
          <div className="flex text-black text-md font-semibold dark:text-gray-100"><img src="mail.svg" className="w-6 mx-2 dark:text-gray-100 " />Mail</div>
          <p className="ml-10 mb-7 dark:text-gray-200 ">afahri22@yahoo.com</p>
        </div>

        <div className="lg:w-6/12 w-full flex flex-col h-full mx-auto">
          <Form />

        </div>
      </div>
      
    </>
  )
}
