import React from 'react'
import Head from 'next/head'
import SEO_DATA from '../components/seo'
import Index from '../components/Skills/Index'

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