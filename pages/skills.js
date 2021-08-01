import React from 'react'
import Head from 'next/head'
import SEO_DATA from '../data/seo'
import Index from '../components/Skills/Index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function skills() {
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'Skills'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Skills'}</title>
      </Head>
      <Index />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}