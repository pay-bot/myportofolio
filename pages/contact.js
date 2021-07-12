import React from 'react'
import Head from 'next/head'
import SEO_DATA from '../components/seo'
import Contact from '../components/Contact/Contact'


const contact = () => {

  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'Contact'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Contact'}</title>
      </Head>
      <Contact />
    </>
  )
}

export default contact
