import Head from 'next/head'
import SEO_DATA from '../components/seo'
import Index from '../components/Project/Index'

export default function project() {
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'Project'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Project'}</title>
      </Head>
      <Index />
    </>
  )
}

