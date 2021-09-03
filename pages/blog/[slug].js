import { getDetailPost } from "../../utils/api"
import React, { useState } from "react";
import { useRouter } from 'next/router'
import moment from "moment"



export default function page({ detailPost }) {
  const [detail, setDetail] = useState(detailPost);
  const router = useRouter();
  const { locale } = router;
  const language = locale;
  return (
    <>
      <div className="md:w-9/12 w-full mx-auto md:px-6 px-2">
        <img src={detail.img_url} alt="" className="md:w-screen md:h-[600px] mt-20" />
        <div className="my-10">
          <h1 className="text-5xl text-center text-gray-700 dark:text-gray-50">{language === 'en' ? detail.title : detail.title_idn}</h1>
          <div className="flex justify-center my-5">
            <p className="text-xs text-gray-500 dark:text-gray-300"> {moment(detail.created_at).calendar()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">&nbsp; - Fahri</p>
          </div>
          <div className="text-gray-700 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: language === 'en' ? detail.description : detail.description_idn }} />
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(ctx) {
  const [detailPost] = await Promise.all([getDetailPost(ctx.params.slug)]);

  return { props: { detailPost } };
}