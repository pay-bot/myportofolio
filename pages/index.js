import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from '../components/Home/Home';
import SEO_DATA from '../data/seo';

export default function index() {
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content="Home" key="ogtitle" />
        <title>{`${SEO_DATA.title} - Home`}</title>
      </Head>
      <Home />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
