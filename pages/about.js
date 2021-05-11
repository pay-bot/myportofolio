import React from 'react'
import AboutCard from '../components/AboutCard'
import Wrapper from '../layouts/Wrapper'
import Head from 'next/head'
import SEO_DATA from '../components/seo'

const about = () => {
  return (
    <Wrapper>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'About'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - About'}</title>
      </Head>
      <div className="mt-28
      ">

        <p className="text-center capitalize font-semibold text-gray-700 text-2xl">tentang</p>
        <p className="text-center mb-5 text-gray-500 text-md ">Profil singkat saya</p>
        <div className="lg:w-9/12 w-11/12 bg-white lg:h-[350px] h-full mx-auto shadow-xl flex lg:flex-row flex-col lg:mb-0 mb-5">
          <AboutCard />
        </div>
      </div>
    </Wrapper>
  )
}

export default about
