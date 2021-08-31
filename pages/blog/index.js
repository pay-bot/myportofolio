import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import moment from "moment"
import { useRouter } from 'next/router'


export default function index({ data }) {
  const router = useRouter();
  const { locale } = router;
  const  language = locale;
  return (
    <>
      <div className="md:w-9/12 w-full mx-auto md:mt-28 mt-20 md:px-8   ">
        {data.map((data, item) => (

          <div className="flex md:flex-row flex-col-reverse hover:bg-[#F5F5F5] dark:hover:bg-[#233F64] p-5 md:hover:border-l-4 border-b">
            <div className="md:w-6/12 w-full mr-5 items-center justify-center flex">
              <div className="">
                <Link href={`/blog/${language === 'en' ? data.slug : data.slug_idn}`}><a className="">
                  <p className="text-center text-2xl mb-5 text-[#008FFF] dark:text-[#92C4FF]">{language === 'en' ? data.title : data.title_idn}</p></a></Link>
                <p className="text-justify my-3 text-gray-800 dark:text-white">Deciphering how the data flows through the components, seeing how other components are utilized within other components, and the countless examples of DRY code had a huge impact on how I developed this entire project.</p>
                <div className="flex">
                  <p className="text-xs text-gray-500 dark:text-gray-300"> {moment(data.created_at).calendar()}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">&nbsp; - Fahri</p>
                </div>
              </div>
            </div>
            <div className="md:w-6/12 w-full">
              <img src={data.img_url} alt="" className="rounded-md py-5 h-60 w-full object-cover" />

            </div>
          </div>
        ))}
      </div>
    </>
  )
}


export async function getServerSideProps() {
  // Call external API from here directly
  const response = await axios.get('http://127.0.0.1:8000/api/blog');
  const data = response.data
  return {
    props: { data: data },
  }
}
