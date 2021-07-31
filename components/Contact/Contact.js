import React from 'react'
import Form from "../Form"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <>
      <motion.div className="lg:w-9/12 w-11/12 mx-auto flex lg:flex-row flex-col mt-28 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 2 }}>
        <div className="lg:w-6/12 w-full mr-5 ">
          <h2 className="font-semibold text-lg text-gary-700 dark:text-gray-300 mb-4">Hubungi Saya</h2>
          <p className="text-gray-900 dark:text-gray-300 text-md text-justify">Saya sangat senang membangun relasi dengan semua orang yang saya jumpai, saya berharap apa yang saya miliki memberikan manfaat bagi saya dan juga orang lain. jadi jangan sungkan untuk menyapa saya :) </p>
          <div className="mt-5 flex text-black dark:text-gray-300 text-md font-semibold"><img src="location.svg" className="w-6 mx-2 " />Alamat</div>
          <p className="ml-10 mb-7 dark:text-gray-400">Depok, Jawa Barat</p>
          <div className="flex text-black text-md font-semibold dark:text-gray-300"><img src="phoneout.svg" className="w-6 mx-2 " />Phone</div>
          <p className="ml-10 mb-7 dark:text-gray-400 ">08984629140</p>
          <div className="flex text-black text-md font-semibold dark:text-gray-300"><img src="mail.svg" className="w-6 mx-2 dark:text-gray-300 " />Mail</div>
          <p className="ml-10 mb-7 dark:text-gray-400 ">afahri22@yahoo.com</p>
        </div>

        <div className="lg:w-6/12 w-11/12 flex flex-col h-full mx-auto">
          <Form />

        </div>
      </motion.div>
    </>
  )
}
