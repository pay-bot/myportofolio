import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import moment from "moment"
import clsx from "clsx";
import classnames from "classnames";
import { getProject } from "../../utils/api"



import { useRouter } from 'next/router'


export default function index({ initialProject }) {

  const router = useRouter();
  const { locale } = router;
  const language = locale;
  return (
    <>
      <div className="md:w-9/12 w-full mx-auto mt-28 md:px-8 px-4"   >
        {initialProject.map((data, i) => (

          <div className={classnames(i % 2 === 0 ? "flex md:flex-row-reverse md:mb-20 mb-10 " : "flex md:mb-20 mb-10")}>
            <div className=" z-30 hover:md:z-0 hover:-z-10 md:w-7/12 w-11/12 md:relative absolute  ">
              <img src={data.img_url} alt="" className=" transform transition duration-500 ease-in-out md:hover:scale-110 hover:scale-0  rounded shadow-2xl w-full md:h-[400px] h-[314px] " />
            </div>
            <div className={classnames(i % 2 === 0 ? "mr-1 md:opacity-100 md:mt-5 opacity-0 transform transition duration-1000 ease-in-out hover:opacity-100 select-none md:w-5/12 w-full md:z-30 z-0 hover:z-30 relative md:px-0 px-3 md:py-0 pt-2  dark:md:bg-transparent dark:bg-gray-700 dark:bg-opacity-90 bg-white bg-opacity-80 md:bg-opacity-0 rounded" : "mr-1 md:opacity-100 md:mt-5 opacity-0 transform transition duration-1000 ease-in-out hover:opacity-100 select-none md:w-5/12 w-full md:z-30 z-0 hover:z-30 relative md:px-0 px-3 md:py-0 pt-2  dark:md:bg-transparent dark:bg-gray-700 dark:bg-opacity-90 bg-white bg-opacity-80 md:bg-opacity-0 rounded ")}
            >
              <p className={classnames(i % 2 === 0 ? "md:text-left text-right flex  capitalize mb-5 text-right text-xl font-semibold dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200" : "capitalize mb-5 text-right text-xl font-semibold dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 ")}>{data.title}</p>
              <div className={classnames(i % 2 === 0 ? "md:py-5 md:-mr-20 -mr-0 md:px-5 md:mt-14 mt-3 md:shadow-xl shadow-none md:bg-[#EAECF4]  dark:md:bg-[#455781] dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 rounded absolute flex " : "md:py-5 md:-ml-20 -ml-0 md:px-5 md:mt-14 mt-3 md:shadow-xl shadow-none md:bg-[#EAECF4]  dark:md:bg-[#455781] dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 rounded absolute flex ")}>
                <div className={classnames(i % 2 === 0 ? "text-left flex text-md dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 md:mr-0 mr-3" : "flex text-right text-md dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 md:mr-0 mr-3")} dangerouslySetInnerHTML={{ __html: language === 'en' ? data.description : data.description_idn }} />

              </div>
              <div className={classnames(i % 2 === 0 ? "-bottom-8 md:mt-0 mt-36 md:bottom-20 flex justify-start   md:absolute relative" : "-bottom-8 md:mt-0 mt-36 md:bottom-20 flex justify-start right-0  flex-row-reverse md:absolute relative ")}>
                {data.tech.map(data => <img src={data.code} title={data.name} className="w-8 h-8 mx-2 transform transition duration-500 ease-in-out hover:scale-125" alt="" />)}

              </div>
              <Link href={data.href}><a className="">
                <div className="transform transition duration-500 ease-in-out hover:scale-110 items-center flex -z-30 md:mt-[310px] mt-12 my-5 mx-1 justify-center border tracking-widest rounded font-semibold py-1 bg-[#45ADFF] text-white">
                  <img src="/right-arrow.svg" alt="" className="w-8 h-5  mx-3 " />
                  <p className="">View Project</p>
                  <img src="/left-arrow.svg" alt="" className="w-8 h-5  mx-3 block" />
                </div>
              </a></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


export async function getServerSideProps() {
  const [initialProject] = await Promise.all([getProject()]);

  return { props: { initialProject } };
}
