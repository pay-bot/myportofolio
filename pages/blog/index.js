import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import moment from "moment"
import { useRouter } from 'next/router'
import { getPost } from "../../utils/api"



export default function index({ initialPost }) {

  const router = useRouter();
  const { locale } = router;
  const  language = locale;
  return (
    <>
      <div className="md:w-9/12 w-full mx-auto md:mt-28 mt-20 md:px-8 px-2  ">
        {initialPost.map((data, i) => (

          <div key={i} className="flex  hover:bg-[#F5F5F5] dark:hover:bg-[#233F64] md:px-5 md:hover:border-l-4 border-b">
            <div className="md:w-6/12 w-7/12 mr-5 items-center justify-center flex">
              <div className="">
                <Link href={`/blog/${language === 'en' ? data.slug : data.slug_idn}`}><a className="">
                  <p className="md:text-center text-2xl mb-5 text-[#008FFF] dark:text-[#92C4FF]">{language === 'en' ? data.title : data.title_idn}</p></a></Link>
                <div className="text-gray-700 dark:text-gray-50 truncate-lines-3" dangerouslySetInnerHTML={{ __html: language === 'en' ? data.description : data.description_idn }} />
                <div className="flex">
                  <p className="text-xs text-gray-500 dark:text-gray-300"> {moment(data.created_at).calendar()}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">&nbsp; - Fahri</p>
                </div>
              </div>
            </div>
            <div className="md:w-6/12 w-5/12">
              <img src={data.img_url} alt="" className="rounded-md py-2 md:h-64 md:w-full w-44 h-full " />

            </div>
          </div>
        ))}
      </div>
    </>
  )
}


export async function getServerSideProps() {
  const [initialPost] = await Promise.all([getPost()]);

  return { props: { initialPost } };
}
