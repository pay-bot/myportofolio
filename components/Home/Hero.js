import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';
import { RESUME } from "./resume"
import Link from "next/link"




export default function Hero() {
  const { t } = useTranslation('common');
  return (
    <>


      <div className=" lg:w-9/12 w-full flex md:flex-row flex-col my-auto lg:h-screen items-center justify-center mx-auto lg:px-0 md:px-8 px-4 lg:-mt-16 md:mt-5 mt-10 lg:overflow-hidden lg:-mb-2 mb-[89px]  ">
        <motion.div className=" md:w-6/12 w-full mx-auto mb-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>
          <div className="md:text-left text-center md:mt-24 ">
            <p className="text-4xl text-5xl  md:text-6xl font-black  dark:text-white mb-3">{t("greeting.p1")}</p>
            <p className="text-4xl sm:text-5xl  md:text-6xl font-black  dark:text-white">{t("greeting.p2")}<span className="text-blue-500"> Fahri</span>
            </p>

            <div className="mt-5 mb-5 text-4xl font-bold text-blue-500 ">
              <Typewriter
                options={{
                  strings: ['Front End', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              /></div>
            <div className="flex md:justify-start justify-center">
              <button className="bg-[#008FFF] dark:bg-[#45ADFF] px-4 py-2 mr-3 text-lg font-semibold tracking-wider text-white rounded hover:bg-blue-600"><Link href="#hire"><a >{t("button.hire")}</a></Link></button>
              <button className="bg-blue-100 px-4 py-2 text-lg font-semibold tracking-wider text-blue-600 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"  ><a href={RESUME}>{t("button.download")}</a></button>
            </div>

          </div>
        </motion.div>
        <motion.div className="lg:-mr-5 -mr-0  md:w-6/12 relative w-full mx-auto flex md:flex-row justify-center flex-col lg:mt-14 md:mt-10 mt-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>
          <div className="mx-auto rounded-full relative lg:h-[400px] lg:w-[400px] h-[330px] w-[330px] px-5 border-4 border-[#008FFF] dark:border-[#45ADFF]  ">
            <Link href="https://reactjs.org/"><a className="ml-4 flex absolute animate-wiggle lg:w-20 lg:h-20 w-16 h-16  rounded-full  nm-inset-white-100 dark:nm-inset-gray-100 z-30 items-center"><img src="react-2.svg" alt="" className="p-2" /></a></Link>
            <Link href="https://v3.vuejs.org"><a className="right-8 flex absolute animate-wiggle lg:w-20 lg:h-20 w-16 h-16 rounded-full  nm-inset-white-100 dark:nm-inset-gray-100 z-30  "><img src="vue.svg" alt="" className="p-2 mt-2 ml-1" /></a></Link>
            <Link href="https://laravel.com/"><a className="lg:-ml-14 -ml-9 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 mt-52 nm-inset-white-100 dark:nm-inset-gray-100 "><img src="laravel.svg" alt="" className="p-1" /></a></Link>
            <Link href="https://tailwindcss.com/"><a className="lg:-right-8 -right-3 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 mt-52 nm-inset-white-100 dark:nm-inset-gray-100 "><img src="tailwind.svg" alt="" /></a></Link>




            <img src="porto.png" alt="" height="550" className=" absolute lg:h-[500px] h-[415px]" />
          </div>
        </motion.div>
      </div>

    </>
  )
}