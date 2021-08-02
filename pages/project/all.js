import Head from 'next/head'
import SEO_DATA from '../../data/seo'
import Project from '../../components/Project/Project'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Category from '../../components/Project/Category';

export default function home() {
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'Project'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Project'}</title>
      </Head>
      <div className="mt-28 w-9/12 w-11/12 mx-auto mt-28 lg:px-5 px-0 mb-10 ">
        <Category />
      </div>
      <Project />
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