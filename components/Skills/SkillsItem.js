import React, { useMemo } from "react";
import { useRouter } from 'next/router'
import Image from "next/image"



export default function SkillsItem() {

  const router = useRouter();
  const { locale } = router;
  const language = locale;
  
  const interval = 30

  
  const skills = useMemo(
    () => [
      {
        image: "/images/html.svg",
        alt: "html",
        title: "HTML",
        level: "Advanced",
        level_idn: "Lanjutan"
      },
      {
        image: "/images/css.png",
        alt: "css",
        title: "CSS",
        level: "Advanced",
        level_idn: "Lanjutan"
      },
      {
        image: "/images/js.png",
        alt: "Javascript",
        title: "Javascript",
        level: "Intermediate",
        level_idn: "Menengah"
      },
      {
        image: "/images/react.png",
        alt: "react",
        title: "React.JS",
        level: "Intermediate",
        level_idn: "Menengah"
      },
      {
        image: "/images/next.svg",
        alt: "next",
        title: "Next.JS",
        level: "Intermediate",
        level_idn: "Menengah"
      },
      {
        image: "/vue.svg",
        alt: "vue",
        title: "Vue.JS",
        level: "Beginer",
        level_idn: "Pemula"
      },
      {
        image: "/laravel.svg",
        alt: "laravel",
        title: "Laravel",
        level: "Beginer",
        level_idn: "Pemula"
      },
      {
        image: "/images/tailwind.svg",
        alt: "tailwind",
        title: "Tailwind",
        level: "Advanced",
        level_idn: "Lanjutan"
      },
    ])
  return (
    <>
      <div  className='grid -mx-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>
      {skills.map((data, i) => (
        <div key ={i} data-aos="fade-up" data-aos-offset={i % 2 === 0 ? (interval+15) * i   : interval * i} className="">
      <div  className='transform transition duration-500 ease-in-out hover:scale-110 dark:bg-gradient-to-t dark:from-blue-600 dark:via-gray-700 dark:to-gray-900 border-gray-600 dark:border-gray-600 bg-white p-6 flex flex-col items-center m-2 justify-center' >
        <div className='relative w-24 h-24'>
          <Image layout="fill"
          objectFit="fill" className=""  src={data.image} alt={data.alt} />
        </div>
        <div className='flex flex-col items-center'>
          <span className='block text-xl mb-2 dark:text-white'>{data.title}</span>
        </div>
        <div className="nm-inset-white-100 dark:nm-inset-gray-100 w-full py-3 text-center ">
          <p className="font-semibold dark:text-white">{language === 'en' ? data.level : data.level_idn }</p>
          </div>
      </div>
      </div>
      ))}
      </div>
    </>
  )
}
