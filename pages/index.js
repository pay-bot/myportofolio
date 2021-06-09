import "react-multi-carousel/lib/styles.css";
import Home from "../components/Home/Home"

import Head from 'next/head'
import SEO_DATA from '../components/seo'


export default function index() {
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'Home'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Home'}</title>
      </Head>
      <Home />
    </>
  )
}
