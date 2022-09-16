import { withRouter } from 'next/router';
import Head from 'next/head';
import SEO_DATA from '../data/seo';

function Wrapper({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:site_name"
          content={SEO_DATA.site_name}
          key="ogsitename"
        />
        <meta
          property="og:description"
          content={SEO_DATA.description}
          key="ogdesc"
        />
        <meta name="description" content={SEO_DATA.description} />
        <meta name="Description" content={SEO_DATA.description} />
      </Head>
      <div className="bg-white dark:bg-[#1A2744]">

      <main className="overflow-x-hidden flex-grow bg-white  dark:bg-[#1A2744]   scrollbar-hide ">
        {children}
      </main>

      </div>
    </>
  );
}

export default withRouter(Wrapper);
