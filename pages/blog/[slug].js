import React, { useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { getPost, getDetailPost } from "../../utils/api";
import SEO_DATA from "../../data/seo";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";

export default function Page({ detailPost, initialPost }) {
  const [detail, setDetail] = useState(detailPost);
  const router = useRouter();
  const { locale } = router;
  const language = locale;
  const dataBlur =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIkAiQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAACAQADBQT/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+VlYEZUBEJARFQERUBEVARFYERWBGZgfY2FjYA4mFjYAoWJgChYmAKFiAKEgChIAsrAjMwPvxMPGwAxsLGwAxMPEwAxMPEsALBsOxLACodg2AKFUAUJARlYHo42FjYAY2HiYAYmHiWAFg2Olg2AFg2Olg2AFiWFYlgBUpVAFCQEZWB6mJh42AGJh4mAGJYeJYAWDY6WDYAWDYdg2AFg2Olg2AFGnRoChICMqA9fGwsbADEw8TADEsOxLAc7EsOwbACwbDsGgFg06NAKNOjQGoVQBZWB7GNhICYmEgBYlh0aAVKdGgFCulCgFGnRoBRp0aA1FqAjKgPaRWBEVgGjSqUAqUqNAKNOjQCjSo0AqUqNAai1ARmYHtMzAiKgJRpUaA0adCgNGlRoDQp0KA0aVGgNRagMioD//2Q==";
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content="Home" key="ogtitle" />
        <title>
          {`Blog -${language}` === "en" ? detail.title : detail.title_idn}
        </title>
      </Head>
      <Navbar />
      <div className="w-full px-4 mx-auto mt-24 mb-10 lg:w-8/12 lg:px-0 md:px-8">
        <div key={detail.id} className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-8/12">
            <div className="md:mt-5">
              <p className="pb-5 text-gray-700 dark:text-white">BLOG /</p>
              <h1 className="text-4xl font-semibold text-gray-700 md:text-5xl dark:text-white md:font-bold">
                {language === "en" ? detail.title : detail.title_idn}
              </h1>
              <div className="flex my-5">
                <p className="text-xs text-white0 dark:text-gray-100">
                  {" "}
                  {moment(detail.created_at).calendar()}
                </p>
                <p className="text-xs text-white0 dark:text-gray-100">
                  &nbsp; - Fahri
                </p>
              </div>
            </div>
            {/* <Image
              src={detail.img_url}
              alt=""
              className="md:w-screen md:h-[600px] mt-5"
              layout="fill"
              objectFit="fill"
              loading="eager"
              priority
            /> */}
            <div className="object-center w-full">
              <Image
                objectFit="cover"
                src={detail.img_url}
                alt="Profile"
                loading="lazy"
                placeholder="blur"
                blurDataURL={dataBlur}
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="my-5">
              <div
                className="text-gray-700 dark:text-white"
                dangerouslySetInnerHTML={{
                  __html:
                    language === "en"
                      ? detail.description
                      : detail.description_idn,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col my-5 ml-0 lg:w-4/12 lg:ml-5">
            <div className="flex mb-5 border-b-2 border-black">
              <p className="inline-block px-2 py-1 text-white bg-black text-md">
                RECENT POST
              </p>
            </div>
            <div className="">
              {initialPost.map((data, i) => (
                <Link
                  key={i}
                  href={`/blog/${
                    language === "en" ? data.slug : data.slug_idn
                  }`}
                >
                  <a className="">
                    <p className="text-base text-gray-700 capitalize hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">
                      {language === "en" ? data.title : data.title_idn}
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
    getPost(),
  ]);

  return { props: { detailPost, initialPost } };
}
