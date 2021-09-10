import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import moment from "moment"
import { useRouter } from 'next/router'
import { getPost } from "../../utils/api"
import { motion } from "framer-motion"




export default function index({ initialPost }) {

  const router = useRouter();
  const { locale } = router;
  const language = locale;
  return (
    <>
      <motion.div className='lg:w-8/12 w-full flex lg:flex-row flex-col mx-auto justify-around md:mt-4 lg:px-0 md:px-8 px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>

        {initialPost.map((data, i) => {
          if (data.length === 0) {
            return (
              <div key={i} className="">
                <p className="text-xl">kosong</p>
              </div>
            )
          } else {
            return (
              <>

                <div className="lg:w-8/12 mt-10">
                  <div className="border-b-2  border-[#008FFF] dark:border-[#45ADFF] mb-5 flex">
                    <p className="text-md inline-block px-2 py-1 bg-[#008FFF] dark:bg-[#45ADFF] dark:text-white">BLOG</p>
                  </div>
                  <div key={data.id} className="mt-5 border-b">
                    <Link href={`/blog/${language === 'en' ? data.slug : data.slug_idn}`}><a className="">
                      <p className="md:text-3xl text-2xl capitalize  hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">{language === 'en' ? data.title : data.title_idn}</p></a></Link>
                    <div className="flex  my-5">
                      <p className="text-xs text-white0 dark:text-gray-100"> {moment(data.created_at).calendar()}</p>
                      <p className="text-xs text-white0 dark:text-gray-100">&nbsp; - Fahri</p>
                    </div>
                    <div className="card-zoom mb-3  ">
                      <img src={data.img_url} alt="" className="card-zoom-image overflow-hidden lg:m-1 lg:w-full lg:h-[464px] w-full transition duration-500 ease-in-out transform " />
                    </div>
                    <div className="text-gray-700 md:block hidden dark:text-white truncate-3-lines line-clamp-3" dangerouslySetInnerHTML={{ __html: language === 'en' ? data.description : data.description_idn }} />
                    <Link href={`/blog/${language === 'en' ? data.slug : data.slug_idn}`}><a className="">
                      <button className="text-white text-sm font-semibold p-2 my-6 bg-blue-400">Lanjutkan Membaca</button></a></Link>
                  </div>
                </div>
                <div className="lg:w-4/12 w-full mt-10">
                  <div className="flex flex-col lg:ml-5">
                    <div className="border-b-2  border-black mb-5 flex">
                      <p className="text-md inline-block px-2 py-1 bg-black text-white">RECENT POST</p>

                    </div>
                    <div className="lg:my-0 my-5">
                      <Link href={`/blog/${language === 'en' ? data.slug : data.slug_idn}`}><a className="">
                        <p className=" text-base capitalize  hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">{language === 'en' ? data.title : data.title_idn}</p></a></Link></div>
                  </div>
                </div>

              </>
            )
          }

        }
        )

        }



      </motion.div>
    </>
  )
}


export async function getServerSideProps() {
  const [initialPost] = await Promise.all([getPost()]);

  return { props: { initialPost } };
}
