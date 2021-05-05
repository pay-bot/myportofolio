import Wrapper from "../layouts/Wrapper";
import Link from 'next/link'

import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




export default function Home(props) {

  const Greeting = () =>
    <div className="greeting">
      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-start dark:text-gray-300">Halo...</div>
      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-start dark:text-gray-300">Saya <span className="text-blue-500">Fahri</span>
      </div>

      <div className="mt-5 mb-5 text-start sm:text-xl font-semibold  text-gray-400">"Di saat VScode kubuka di situlah aplikasimu akan jadi nyata"</div>

      <button className="bg-blue-500 px-4 py-2 mr-3 text-lg font-semibold tracking-wider text-white rounded hover:bg-blue-600">Contact</button>
      <button className="bg-blue-100 px-4 py-2 text-lg font-semibold tracking-wider text-blue-600 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Download CV</button>

    </div>

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (

    <>
      < Wrapper >
        <div className="w-11/12 mx-auto  ">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-6/12 w-full">
              <Greeting />
            </div>
            <div className="md:w-6/12 w-full flex md:flex-row flex-col border shadow-xl rounded-xl my-5 items-center">
              <div className="w-4/12 mx-auto">
                <div className="border-1 m-2 rounded-full bg-gradient-to-r from-indigo-600 to-gray-800 ">

                  <img src="portofolio.png" className="rounded-full p-1" />

                </div>
              </div>
              <div className="md:w-8/12 w-full">
                <p className="text-center text-lg font-semibold">Fahri Alpiansyah</p>
                <p className="text-center text-sm">Front-End</p>
                <p className="text-center text-sm">Developer/Designer</p>
                <div className="border border-2 border-gray-400 bg-gray-400 h-1 my-3 mr-3"></div>
                <div className="flex justify-center mb-3">
                  <img src="facebook.svg" alt="" className="w-5 mx-1" />
                  <img src="github.svg" alt="" className="w-5 mx-1" />
                  <img src="twitter.svg" alt="" className="w-5 mx-1" />
                  <img src="youtube.svg" alt="" className="w-5 mx-1" />
                  <img src="mail.svg" alt="" className="w-5 mx-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-bold text-4xl uppercase text-center flex-col ">
            <h1 className='mt-20'>skills</h1>

            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all 2"
              transitionDuration={500}
              containerClassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              deviceType={props.deviceType}
              dotListClassName="custom-dot-list-style"
              itemClassName="carousel-item-padding-40-px"
            >



              <div className='bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
                <img className='w-24' src="/images/js.png" alt="JavaScript" />
                <div className='flex flex-col items-center'>
                  <span className='block text-xl'>JavaScript</span>
                </div>
              </div>
              <div className='bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
                <img className='w-24' src="/images/css.png" alt="Css" />
                <div className='flex flex-col items-center'>
                  <span className='block text-xl  -mb-.3'>CSS</span>
                </div>
              </div>
              <div className='bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
                <img className='w-24' src="/images/react.png" alt="React" />
                <div className='flex flex-col items-center'>
                  <span className='block text-xl -pb-1'>ReactJS</span>
                </div>
              </div>
              <div className='bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
                <img className='w-24 pb-10' src="/images/next.svg" alt="Next" />
                <div className='flex flex-col items-center'>
                  <span className='block text-xl '>NextJS</span>
                </div>
              </div>
              <div className='bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
                <img className='w-24 pb-10' src="/images/nodejs.svg" alt="JavaScript" />
                <div className='flex flex-col items-center'>
                  <span className='block text-xl '>NodeJS</span>
                </div>
              </div>
              <div className='bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
                <img className='w-24 pb-10' src="/images/tailwind.svg" alt="SASS" />
                <div className='flex flex-col items-center'>
                  <span className='block text-xl '>Tailwind</span>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </ Wrapper>
    </>


  )
}
