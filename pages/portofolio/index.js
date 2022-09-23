import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { getProject } from '../../utils/api';
import Title from '../../components/Title';
import { useSelector, useDispatch } from "react-redux";

import en from '../../locales/en';
import id from '../../locales/id';
import Description from '../../components/Description';
import SEO_DATA from '../../data/seo';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import DirectModal from '../../layouts/modal/DirectModal';

const initialProject = [
  {
    id: 1,
    img_url: '/kns.png',
    href: 'https://www.kns-id.com/',
    title: 'Karya Nyata Sosial',
    title_idn: 'Karya Nyata Sosial',
    description: 'Landing Page Aplication, made with Baezeni Headless CMS for Api data and React with tailwind as a Frontend tools',
    description_idn: 'Aplikasi Landing Page, di buat dengan Baezeni Headless CMS untuk data Api, dan React dengan Tailwind sebagai alat Frontend'
  },
  {
    id: 1,
    img_url: '/Yap.png',
    href: 'https://yapadmin.vercel.app',
    title: 'Yap Admin',
    title_idn: 'Yap Admin',
    description: 'Inspired from Baezeni Headless CMS,  recreated with Laravel and React , and add many module depend on customer need. ',
    description_idn: 'Terinspirasi dari Baezeni Headless CMS, di buat ulang dengan Laravel dan React, dan menambahkan banyak modul di dasari kebutuhan pelanggan'
  }]

export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const language = locale;
  const dataModal = useSelector((state) => state.modal);

  const t = locale === 'en' ? en : id;
  let interval = 1;

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getModalChild);
  // }, []);

  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content="Home" key="ogtitle" />
        <title>{`${SEO_DATA.title} - Portofolio`}</title>
      </Head>
      <Navbar />
      <motion.div
        className="section-base mt-32 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="">
          <Title>PORTOFOLIO</Title>
          <Description>{t.projectDesc}</Description>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

          {initialProject.map((data, i) => (
            <>
              <div
                key={i}
                className={classnames(
                  'w-full border p-3 rounded'
                )}
              >
                <div
                  data-aos="zoom-in"
                  className={classnames(
                    ' overflow-hidden  rounded md:h-[420px] h-[313px]md:ml-8 lg:mr-0 md:-mr-8 lg:ml-0 ml-4'
                  )}
                >
                  <p
                    data-aos="fade-up"
                    className={classnames(
                      'capitalize flex mb-5 text-xl font-semibold dark:md:text-white md:text-gray-700 text-black dark:text-white '
                    )}
                  >
                    {data.title}
                  </p>
                  <div
                    className={classnames(
                      'select-none flex text-md dark:md:text-white md:text-gray-700 text-black dark:text-white md:mr-0 mr-3 z-30 '
                    )}
                    dangerouslySetInnerHTML={{
                      __html:
                        language === 'en'
                          ? data.description
                          : data.description_idn
                    }}
                  />
                  <img
                    src={data?.img_url}
                    alt=""
                    className="transition duration-500 ease-in-out transform rounded shadow-2xl hover:scale-110 h-full object-cover"
                  />
                </div>
                <div className="">
                  <div
                    data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}
                    className=""
                  >
                  
                  </div>
                  <div
                    className={classnames(
                      '-bottom-8 md:mt-0 mt-36 md:bottom-20 flex justify-start md:absolute relative'
                    )}
                  >
                    {data?.tech?.map(tech => (
                      <img
                        src={tech.code}
                        title={tech.name}
                        data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}
                        data-aos-offset={interval++ * 20}
                        className="w-8 h-8 mx-2 transition duration-500 ease-in-out transform hover:scale-125"
                        alt=""
                      />
                    ))}
                  </div>
                  <div data-aos="fade-up" className="">
                    <div className="transform transition duration-500 ease-in-out hover:scale-110 items-center flex -z-30  justify-center border tracking-widest rounded font-semibold py-1 bg-[#008FFF] dark:bg-[#45ADFF] text-white">
                      <Link href={data.href}>
                        <a className="flex -z-30" target="_blank" rel="noreferrer">
                          <img
                            src="/right-arrow.svg"
                            alt=""
                            className="w-8 h-5 mx-3 "
                          />
                          <p className="">View Project</p>
                          <img
                            src="/left-arrow.svg"
                            alt=""
                            className="block w-8 h-5 mx-3"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   const [initialProject] = await Promise.all([getProject()]);

//   return { props: { initialProject } };
// }
