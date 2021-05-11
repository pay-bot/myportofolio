import Wrapper from "../layouts/Wrapper";
import "react-multi-carousel/lib/styles.css";
import Index from "../components/Home/Index"

import Head from 'next/head'
import SEO_DATA from '../components/seo'


export default function Home() {
  return (
    <>
      < Wrapper >
        <Head>
          <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
          <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
          <meta property="og:title" content={'Home'} key="ogtitle" />
          <title>{SEO_DATA.title + ' - Home'}</title>
        </Head>
        <Index />
      </ Wrapper>
    </>
  )
}
