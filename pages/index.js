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
        <div className="w-full">
          <div className="flex lg:flex-row sm:flex-col justify-around">
            <div className="flex flex-col lg:items-start mb-5 lg:text-left sm:items-center sm:text-center justify-center gap-10">
              <Greeting />
            </div>
            <div className="shadow-xl mx-7 flex flex-row max-w-lg justify-center bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400 shadow-xl rounded-xl p-5">
              <div classname="flex flex-col block">
                <div className="lg:p-2 sm:p-1 bg-gradient-to-tr from-fuchsia-600 rounded-full">
                  <div className="flex flex-col block bg-white p-1 rounded-full transform transition hover:rotate-6">
                    <img className="w-40 mx-auto shadow-2xl rounded-full" src='/portofolio.png' alt="Profile face" />
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">

                <p className="text-2xl sm:text-2xl font-semibold text-gray-800">
                  Fahri Alpiansyah
            </p>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-10 w-full inline-block border-b-2 border-fuchsia-600">
                  Front-End Developer/Designer
            </p>

                <div className="flex align-center justify-center mt-4">
                  <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/pay-bot">
                    <FaGithub />
                    <span className="sr-only">Github</span>
                  </a>
                  <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/pay-bot">
                    <FaDribbble />
                    <span className="sr-only">Dribble</span>
                  </a>
                  <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/pay-bot">
                    <FaTwitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/pay-bot">
                    <FaRegEnvelope />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-bold text-4xl uppercase text-center flex-col mb-15 ">
            <h1 className='mt-20'>skills</h1>
          </div>
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



            <div className='mb-3 bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
              <img className='w-24' src="/images/js.png" alt="JavaScript" />
              <div className='flex flex-col items-center'>
                <span className='block text-xl'>JavaScript</span>
              </div>
            </div>
            <div className='mb-3 bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
              <img className='w-24' src="/images/css.png" alt="Css" />
              <div className='flex flex-col items-center'>
                <span className='block text-xl  -mb-.3'>CSS</span>
              </div>
            </div>
            <div className='mb-3 bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
              <img className='w-24' src="/images/react.png" alt="React" />
              <div className='flex flex-col items-center'>
                <span className='block text-xl -pb-1'>ReactJS</span>
              </div>
            </div>
            <div className='mb-3 bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
              <img className='w-24 pb-10' src="/images/next.svg" alt="Next" />
              <div className='flex flex-col items-center'>
                <span className='block text-xl '>NextJS</span>
              </div>
            </div>
            <div className='mb-3 bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
              <img className='w-24 pb-10' src="/images/nodejs.svg" alt="JavaScript" />
              <div className='flex flex-col items-center'>
                <span className='block text-xl '>NodeJS</span>
              </div>
            </div>
            <div className='mb-3 bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
              <img className='w-24 pb-10' src="/images/tailwind.svg" alt="SASS" />
              <div className='flex flex-col items-center'>
                <span className='block text-xl '>Tailwind</span>
              </div>
            </div>


          </Carousel>









        </div>




      </ Wrapper>

    </>


  )
}
