import { withRouter } from 'next/router';
import Footer from '../components/Footer';
import Navbar from '../components/Header/Navbar';
import Head from 'next/head';
import SEO_DATA from '../data/seo';

function Wrapper({ children }) {
  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content={SEO_DATA.site_name} key="ogsitename" />
        <meta property="og:description" content={SEO_DATA.description} key="ogdesc" />
        <meta name="description" content={SEO_DATA.description}></meta>
        <meta name="Description" content={SEO_DATA.description}></meta>
      </Head>
      <Navbar />
      <main className="flex-grow bg-gradient-conic-t from-gray-900 via-gray-100 to-gray-900  dark:bg-gradient-to-r dark:from-blue-gray-900 dark:via-blue-900 dark:to-blue-gray-900">{children}</main>
      <Footer>© 2021 Build with Nextjs & Tailwind</Footer>
    </>
  )
}

export default withRouter(Wrapper);