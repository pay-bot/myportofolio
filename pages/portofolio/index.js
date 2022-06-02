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
    description:'Landing Page Aplication, made with Baezeni Headless CMS for Api data and React with tailwind as a Frontend tools',
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
        className="w-full mx-auto mt-24 mb-10 lg:w-8/12 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-4 lg:px-0 md:px-8">
          <Title>PORTOFOLIO</Title>
          <Description>{t.projectDesc}</Description>
        </div>

        {initialProject.map((data, i) => (
          <>
            <div
              key={i}
              className={classnames(
                'xl:my-32 my-10 ',
                i % 2 === 0 ? 'flex md:flex-row-reverse flex-col  ' : ' flex md:flex-row flex-col'
              )}
            >
              <div
                data-aos="zoom-in"
                className={classnames(
                  ' overflow-hidden md:w-7/12 w-11/12 md:relative rounded md:h-[420px] h-[313px]',
                  i % 2 === 0
                    ? 'md:mr-8 lg:mr-0 md:-ml-8 lg:ml-0 ml-4 '
                    : 'md:ml-8 lg:mr-0 md:-mr-8 lg:ml-0 ml-4'
                )}
              >
                <img
                  src={data?.img_url}
                  alt=""
                  // layout="fill"
                  // objectFit="fill"
                  className="transition duration-500 ease-in-out transform rounded shadow-2xl hover:scale-110 h-full object-cover"
                />
              </div>
              <div className="lg:mx-1 md:mx-8 mx-4 md:px-0 px-3  md:opacity-100 md:mt-5  transform transition duration-1000 ease-in-out select-none md:w-5/12 w-11/12 relative md:py-0 pt-2  dark:md:bg-transparent  dark:bg-[#455781] dark:bg-opacity-90 bg-[#EAECF4] bg-opacity-90 md:bg-opacity-0 rounded ">
                <p
                  data-aos="fade-up"
                  className={classnames(
                    'capitalize flex mb-5 text-xl font-semibold dark:md:text-white md:text-gray-700 text-black dark:text-white',
                    i % 2 === 0 ? '' : 'flex justify-end'
                  )}
                >
                  {data.title}
                </p>
                <div
                  data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}
                  className={classnames(
                    'md:py-5 md:px-5 md:mt-14 mt-3 md:shadow-xl shadow-none md:bg-[#EAECF4]  dark:md:bg-[#455781] dark:md:text-white md:text-gray-700 text-black dark:text-white rounded absolute flex',
                    i % 2 === 0 ? 'md:-mr-20 -mr-0  ' : 'md:-ml-20 -ml-0  '
                  )}
                >
                  <div
                    className={classnames(
                      'select-none flex text-md dark:md:text-white md:text-gray-700 text-black dark:text-white md:mr-0 mr-3 z-30',
                      i % 2 === 0 ? 'text-left ' : 'text-right '
                    )}
                    dangerouslySetInnerHTML={{
                      __html:
                        language === 'en'
                          ? data.description
                          : data.description_idn
                    }}
                  />
                </div>
                <div
                  className={classnames(
                    '-bottom-8 md:mt-0 mt-36 md:bottom-20 flex justify-start md:absolute relative',
                    i % 2 === 0 ? '-ml-2  ' : ' -right-2  flex-row-reverse  '
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
                  <div className="transform transition duration-500 ease-in-out hover:scale-110 items-center flex -z-30 md:mt-[310px] mt-12 my-5 justify-center border tracking-widest rounded font-semibold py-1 bg-[#008FFF] dark:bg-[#45ADFF] text-white">
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
            {dataModal.isOpen === true && dataModal.skill.id === data.id && dataModal.componentName === '' && (
              <DirectModal closeModalHandler={closeModalHandler}>
                {data.href}
              </DirectModal>
            )}
          </>
        ))}
      </motion.div>
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   const [initialProject] = await Promise.all([getProject()]);

//   return { props: { initialProject } };
// }
