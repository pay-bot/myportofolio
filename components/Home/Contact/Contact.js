import React from 'react'
import Form from "./Form"
import { useTranslation } from 'next-i18next';
import Title from "../../Title"
import Description from "../../Description"
import { RESUME } from '../resume';
import Link from "next/link"
export default function Contact() {
  const { t } = useTranslation('common');

  

  return (
    <>
    
      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id="hire" className=" lg:w-8/12 w-full mx-auto flex lg:flex-row flex-col my-10 lg:px-0 md:px-8 px-4"
        >
        <div  className="lg:w-6/12 w-full mr-5 ">
          <Title>{t("hire.title")}</Title>
          <Description>{t("hire.p")}</Description>
          <div data-aos="fade-up" className="flex">
              <button className="bg-[#008FFF] dark:bg-[#45ADFF] px-4 py-2 mr-3 text-lg font-semibold tracking-wider text-white rounded hover:bg-blue-600"><Link href="/project"><a >Portofolio</a></Link></button>
              <button className="bg-blue-100 px-4 py-2 text-lg font-semibold tracking-wider text-blue-600 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"  ><a href={RESUME}>{t("button.download")}</a></button>
            </div>
          <div data-aos="fade-up" className="mt-5 flex text-black dark:text-gray-100 text-md font-semibold"><img src="location.svg" className="w-6 mx-2 " />{t("hire.address")}</div>
          <p  data-aos="fade-left" className="ml-10 mb-7 dark:text-gray-200">Depok, Jawa Barat</p>
          <div data-aos="fade-up" className="flex text-black text-md font-semibold dark:text-gray-100"><img src="phone.svg" className="w-6 mx-2 " />Phone</div>
          <p data-aos="fade-left" className="ml-10 mb-7 dark:text-gray-200 ">08984629140</p>
          <div data-aos="fade-up" className="flex text-black text-md font-semibold dark:text-gray-100"><img src="mail.svg" className="w-6 mx-2 dark:text-gray-100 " />Mail</div>
          <p data-aos="fade-left" className="ml-10 mb-7 dark:text-gray-200 ">afahri22@yahoo.com</p>
        </div>

        <div className="lg:w-6/12 w-full flex flex-col h-full mx-auto">
          <Form />

        </div>
      </div>
      
    </>
  )
}
