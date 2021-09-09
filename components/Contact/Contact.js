import React from 'react'
import Form from "./Form"
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';


export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <>
      <motion.div id="hire" className=" lg:w-9/12 w-full mx-auto flex lg:flex-row flex-col mt-20 lg:px-0 md:px-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <div className="lg:w-6/12 w-full mr-5 ">
          <h2 className="font-semibold text-xl text-gary-700 dark:text-gray-300 mb-4">{t("hire.title")}</h2>
          <p className="text-gray-900 dark:text-gray-300 text-md text-justify">{t("hire.p")}</p>
          <div className="mt-5 flex text-black dark:text-gray-300 text-md font-semibold"><img src="location.svg" className="w-6 mx-2 " />{t("hire.address")}</div>
          <p className="ml-10 mb-7 dark:text-gray-400">Depok, Jawa Barat</p>
          <div className="flex text-black text-md font-semibold dark:text-gray-300"><img src="phoneout.svg" className="w-6 mx-2 " />Phone</div>
          <p className="ml-10 mb-7 dark:text-gray-400 ">08984629140</p>
          <div className="flex text-black text-md font-semibold dark:text-gray-300"><img src="mail.svg" className="w-6 mx-2 dark:text-gray-300 " />Mail</div>
          <p className="ml-10 mb-7 dark:text-gray-400 ">afahri22@yahoo.com</p>
        </div>

        <div className="lg:w-6/12 w-full flex flex-col h-full mx-auto">
          <Form />

        </div>
      </motion.div>
    </>
  )
}
