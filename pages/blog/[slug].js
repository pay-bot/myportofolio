import { getDetailPost } from "../../utils/api"
import React, { useState } from "react";
import { useRouter } from 'next/router'
import moment from "moment"



export default function page({ detailPost }) {
  const [detail, setDetail] = useState(detailPost);
  const router = useRouter();
  const { locale } = router;
  const  language = locale;
  return (
    <>
      <img src={detail.img_url} alt="" />
      <div className="w-8/12 mx-auto px-8">
        <div className="my-10">
          <h1 className="text-5xl text-center">{language === 'en' ? detail.title : detail.title_idn}</h1>
          <div className="flex justify-center my-5">
            <p className="text-xs text-gray-500 dark:text-gray-300"> {moment(detail.created_at).calendar()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">&nbsp; - Fahri</p>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(ctx) {
  const [detailPost] = await Promise.all([getDetailPost(ctx.params.slug)]);

  return { props: { detailPost } };
}