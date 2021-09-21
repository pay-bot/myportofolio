import React, { useState } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { getPost, getDetailPost } from '../../utils/api';
import SEO_DATA from '../../data/seo';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';

export default function Page({ detailPost, initialPost }) {
  const [detail, setDetail] = useState(detailPost);
  const router = useRouter();
  const { locale } = router;
  const language = locale;
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content="Home" key="ogtitle" />
        <title>
          {`Blog -${language}` === 'en' ? detail.title : detail.title_idn}
        </title>
      </Head>
      <Navbar />
      <div className="lg:w-8/12 w-full mx-auto mt-24 mb-10 lg:px-0 md:px-8 px-4">
        <div key={detail.id} className="flex lg:flex-row flex-col">
          <div className="lg:w-8/12 w-full">
            <div className="md:mt-5">
              <p className="pb-5 text-gray-700 dark:text-white">BLOG /</p>
              <h1 className="md:text-5xl text-4xl text-gray-700 dark:text-white md:font-bold font-semibold">
                {language === 'en' ? detail.title : detail.title_idn}
              </h1>
              <div className="flex  my-5">
                <p className="text-xs text-white0 dark:text-gray-100">
                  {' '}
                  {moment(detail.created_at).calendar()}
                </p>
                <p className="text-xs text-white0 dark:text-gray-100">
                  &nbsp; - Fahri
                </p>
              </div>
            </div>
            <Image
              src={detail.img_url}
              alt=""
              className="md:w-screen md:h-[600px] mt-5"
              layout="fill"
              objectFit="fill"
              loading="eager"
              priority
            />
            <div className="my-5">
              <div
                className="text-gray-700 dark:text-white"
                dangerouslySetInnerHTML={{
                  __html:
                    language === 'en'
                      ? detail.description
                      : detail.description_idn
                }}
              />
            </div>
          </div>

          <div className="lg:w-4/12 flex flex-col my-5 lg:ml-5 ml-0">
            <div className="border-b-2  border-black mb-5 flex">
              <p className="text-md inline-block py-1 bg-black text-white px-2">
                RECENT POST
              </p>
            </div>
            <div className="">
              {initialPost.map((data, i) => (
                <Link
                  key={i}
                  href={`/blog/${
                    language === 'en' ? data.slug : data.slug_idn
                  }`}
                >
                  <a className="">
                    <p className="text-base capitalize  hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">
                      {language === 'en' ? data.title : data.title_idn}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const [detailPost, initialPost] = await Promise.all([
    getDetailPost(ctx.params.slug),
    getPost()
  ]);

  return { props: { detailPost, initialPost } };
}
