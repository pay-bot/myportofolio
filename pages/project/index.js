import React from 'react'
import Link from 'next/link'
import classnames from "classnames";
import { getProject } from "../../utils/api"
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import Title from '../../components/Title';

import en from '../../locales/en';
import id from '../../locales/id';
import Description from '../../components/Description';


export default function index({ initialProject }) {

  const router = useRouter();
  const { locale } = router;
  const language = locale;
  const t = locale === 'en' ? en : id;



  return (
    <>
      <motion.div className='lg:w-9/12 w-full  my-10  mx-auto  '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
          <div className="lg:px-0 md:px-8 px-4">
        <Title>{t.project}</Title>
        <Description>{t.projectDesc}</Description>
        </div>

        {initialProject.map((data, i) => (

          <div key={data.id} className={classnames("flex md:mb-20 my-10 ", i % 2 === 0 ? "md:flex-row-reverse " : " mb-10")}>
          <div className=" overflow-hidden md:hover:none hover:md:z-0 md:w-7/12 w-full lg:px-0 md:px-8 px-4 mx-auto md:relative absolute rounded ">
              <img src={data.img_url} alt="" className=" transform transition duration-500 ease-in-out hover:scale-110  rounded shadow-2xl w-full md:h-[420px] h-[313px] " />
            </div>
            <div className="lg:mx-1 md:mx-8 mx-4 md:px-0 px-3  md:opacity-100 md:mt-5 opacity-0 transform transition duration-1000 ease-in-out hover:opacity-100 select-none md:w-5/12 w-full relative md:px-0  md:py-0 pt-2  dark:md:bg-transparent  dark:bg-[#455781] dark:bg-opacity-90 bg-[#EAECF4] bg-opacity-90 md:bg-opacity-0 rounded "
            >
              <p className={classnames(i % 2 === 0 ? "md:text-left text-right flex  capitalize mb-5 text-right text-xl font-semibold dark:md:text-white md:text-gray-700 text-black dark:text-white" : "capitalize mb-5 text-right text-xl font-semibold dark:md:text-white md:text-gray-700 text-black dark:text-white ")}>{data.title}</p>
              <div className={classnames("md:py-5 md:px-5 md:mt-14 mt-3 md:shadow-xl shadow-none md:bg-[#EAECF4]  dark:md:bg-[#455781] dark:md:text-white md:text-gray-700 text-black dark:text-white rounded absolute flex", i % 2 === 0 ? "md:-mr-20 -mr-0  " : "md:-ml-20 -ml-0  ")}>
                <div className={classnames("flex text-md dark:md:text-white md:text-gray-700 text-black dark:text-white md:mr-0 mr-3 z-30", i % 2 === 0 ? "text-left " : "text-right ")} dangerouslySetInnerHTML={{ __html: language === 'en' ? data.description : data.description_idn }} />

              </div>
              <div className={classnames("-bottom-8 md:mt-0 mt-36 md:bottom-20 flex justify-start md:absolute relative", i % 2 === 0 ? "-ml-2  " : " -right-2  flex-row-reverse  ")}>
                {data.tech.map(data => <img src={data.code} title={data.name} className="w-8 h-8 mx-2 transform transition duration-500 ease-in-out hover:scale-125" alt="" />)}

              </div>

              <div className="transform transition duration-500 ease-in-out hover:scale-110 items-center flex -z-30 md:mt-[310px] mt-12 my-5 justify-center border tracking-widest rounded font-semibold py-1 bg-[#008FFF] dark:bg-[#45ADFF] text-white">
                <Link href={data.href}><a className="flex -z-30">
                  <img src="/right-arrow.svg" alt="" className="w-8 h-5  mx-3 " />
                  <p className="">View Project</p>
                  <img src="/left-arrow.svg" alt="" className="w-8 h-5  mx-3 block" />
                </a></Link>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}


export async function getStaticProps() {
  const [initialProject] = await Promise.all([getProject()]);

  return { props: { initialProject } };
}


