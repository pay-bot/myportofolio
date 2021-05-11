import Wrapper from "../layouts/Wrapper";
import "react-multi-carousel/lib/styles.css";
import CarouselProfile from "../components/CarouselProfile"
import Greeting from "../components/Greeting"
import ProfileCard from "../components/ProfileCard";
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
        <div className="lg:w-9/12 w-full mx-auto lg:py-10 p-4 mt-28 ">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-6/12 w-full ">
              <Greeting />
            </div>
            <div className="md:w-6/12 w-full flex md:flex-row flex-col shadow-xl rounded-xl my-5 items-center">
              <ProfileCard />
            </div>
          </div>
          <div className="flex font-bold text-4xl uppercase text-center flex-col ">
            <h1 className='lg:mt-20 mt-0'>skills</h1>
            <CarouselProfile />
          </div>
        </div>
      </ Wrapper>
    </>
  )
}
