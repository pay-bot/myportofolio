import { getDetailPost } from "../../utils/api"
import React, { useState } from "react";
import { useRouter } from 'next/router'
import moment from "moment"
import { getPost } from "../../utils/api"
import Link from 'next/link'


export default function page({ detailPost, initialPost }) {
  const [detail, setDetail] = useState(detailPost);
  const router = useRouter();
  const { locale } = router;
  const language = locale;
  return (
    <>
      <div className="md:w-9/12 w-full mx-auto md:px-6 px-2 ">

        <div className="flex md:flex-row flex-col">
          <div className="md:w-8/12 w-full">
            <div className="md:mt-5">
              <p className="pb-5 text-gray-700 dark:text-white">BLOG /</p>
              <h1 className="md:text-5xl text-4xl text-gray-700 dark:text-white md:font-bold font-semibold">{language === 'en' ? detail.title : detail.title_idn}</h1>
              <div className="flex  my-5">
                <p className="text-xs text-white0 dark:text-gray-300"> {moment(detail.created_at).calendar()}</p>
                <p className="text-xs text-white0 dark:text-gray-300">&nbsp; - Fahri</p>
              </div>
            </div>
            <img src={detail.img_url} alt="" className="md:w-screen md:h-[600px] mt-5" />
            <div className="my-5">

              <div className="text-gray-700 dark:text-white" dangerouslySetInnerHTML={{ __html: language === 'en' ? detail.description : detail.description_idn }} />
            </div>
          </div>

          <div className="flex flex-col lg:ml-5">
            <div className="border-b-2  border-black mb-5 flex">
              <p className="text-md inline-block px-2 py-1 bg-black text-white">RECENT POST</p>

            </div>
            <div className="">
              {initialPost.map((data, i) => (
                <Link href={`/blog/${language === 'en' ? data.slug : data.slug_idn}`}><a className="">
                  <p className="md:text-xl text-lg capitalize  hover:text-blue-700 text-gray-700 dark:text-white">{language === 'en' ? data.title : data.title_idn}</p></a></Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(ctx) {
  const [detailPost, initialPost] = await Promise.all([getDetailPost(ctx.params.slug), getPost()]);

  return { props: { detailPost, initialPost } };
}