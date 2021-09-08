import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import moment from "moment"
import clsx from "clsx";
import classnames from "classnames";
import { getProject, postLike } from "../../utils/api"
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import useLocalStorageState from 'use-local-storage-state'
import LikeButton from '../../components/LikeButton';



export default function index({ initialProject }) {

  const router = useRouter();
  const { locale } = router;
  const language = locale;
  const [toggle, setToggle] = useLocalStorageState(false)

  function onClick() {
    setToggle(true)
  }
  return (
    <>
      <motion.div className='lg:w-9/12 w-full mx-auto  md:pr-5 md:pl-7'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>

        {initialProject.map((data, i) => (

          <div className={classnames(i % 2 === 0 ? "flex md:flex-row-reverse md:mb-20 my-10 " : "flex md:mb-20 mb-10")}>
            <div className=" overflow-hidden z-30 md:hover:none hover:md:z-0 md:w-7/12 w-full md:relative absolute md:px-0 px-3 rounded ">
              <img src={data.img_url} alt="" className=" transform transition duration-500 ease-in-out hover:scale-110  rounded shadow-2xl w-full md:h-[420px] h-[313px] " />
            </div>
            <div className={classnames(i % 2 === 0 ? "md:mr-1 md:ml-0 mr-3 ml-3  md:px-3 px-3 md:opacity-100 md:mt-5 opacity-0 transform transition duration-1000 ease-in-out hover:opacity-100 select-none md:w-5/12 w-full relative md:px-0  md:py-0 pt-2  dark:md:bg-transparent dark:bg-[#455781] dark:bg-opacity-90 bg-[#EAECF4] bg-opacity-90 md:bg-opacity-0 rounded" : " md:ml-1 mr-3 ml-3 md:px-3 px-3 md:opacity-100 md:mt-5 opacity-0 transform transition duration-1000 ease-in-out hover:opacity-100 select-none md:w-5/12 w-full relative md:px-0  md:py-0 pt-2  dark:md:bg-transparent dark:bg-[#455781] dark:bg-opacity-90 bg-[#EAECF4] bg-opacity-90 md:bg-opacity-0 rounded ")}
            >
              <p className={classnames(i % 2 === 0 ? "md:text-left text-right flex  capitalize mb-5 text-right text-xl font-semibold dark:md:text-white md:text-gray-700 text-black dark:text-white" : "capitalize mb-5 text-right text-xl font-semibold dark:md:text-white md:text-gray-700 text-black dark:text-white ")}>{data.title}</p>
              <div className={classnames(i % 2 === 0 ? "md:py-5 md:-mr-20 -mr-0 md:px-5 md:mt-14 mt-3 md:shadow-xl shadow-none md:bg-[#EAECF4]  dark:md:bg-[#455781] dark:md:text-white md:text-gray-700 text-black dark:text-white rounded absolute flex " : "md:py-5 md:-ml-20 -ml-0 md:px-5 md:mt-14 mt-3 md:shadow-xl shadow-none md:bg-[#EAECF4]  dark:md:bg-[#455781] dark:md:text-white md:text-gray-700 text-black dark:text-white rounded absolute flex ")}>
                <div className={classnames(i % 2 === 0 ? "text-left flex text-md dark:md:text-white md:text-gray-700 text-black dark:text-white md:mr-0 mr-3" : "flex text-right text-md dark:md:text-white md:text-gray-700 text-black dark:text-white md:mr-0 mr-3")} dangerouslySetInnerHTML={{ __html: language === 'en' ? data.description : data.description_idn }} />

              </div>
              <div className={classnames(i % 2 === 0 ? "-bottom-8 md:mt-0 mt-36 md:bottom-20 flex justify-start   md:absolute relative" : "-bottom-8 md:mt-0 mt-36 md:bottom-20 flex justify-start right-0  flex-row-reverse md:absolute relative ")}>
                {data.tech.map(data => <img src={data.code} title={data.name} className="w-8 h-8 mx-2 transform transition duration-500 ease-in-out hover:scale-125" alt="" />)}

              </div>

              <div className="transform transition duration-500 ease-in-out hover:scale-110 items-center flex -z-30 md:mt-[310px] mt-12 my-5 mx-1 justify-center border tracking-widest rounded font-semibold py-1 bg-[#45ADFF] text-white">
                <Link href={data.href}><a className="flex -z-30">
                  <img src="/right-arrow.svg" alt="" className="w-8 h-5  mx-3 " />
                  <p className="">View Project</p>
                  <img src="/left-arrow.svg" alt="" className="w-8 h-5  mx-3 block" />
                </a></Link>
              </div>
              <button
          className='rounded-md focus:outline-none heart-button'
          onClick={postLike}
        >
          test
        </button>
              </div>
              </div>
        ))}
      </motion.div>
    </>
  )
}


export async function getServerSideProps() {
  const [initialProject] = await Promise.all([getProject()]);

  return { props: { initialProject } };
}
