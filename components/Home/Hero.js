import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';
import { RESUME } from "./resume"
import Link from "next/link"




export default function Hero() {
  const { t } = useTranslation('common');
  return (
    <>


      <div className="lg:w-9/12 w-11/12 flex md:flex-row flex-col my-auto lg:h-screen h-full items-center justify-center mx-auto px-4 lg:mt-0 mt-24 lg:overflow-hidden lg:-mb-2 mb-[88px]  ">
        <motion.div className="md:w-6/12 w-full mx-auto mb-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>
          <div className="lg:text-left text-center lg:mt-24 ">
            <p className="text-4xl sm:text-5xl md:text-left text-center md:text-6xl font-black  dark:text-white mb-3">{t("greeting.p1")}</p>
            <p className="text-4xl sm:text-5xl md:text-left text-center md:text-6xl font-black  dark:text-white">{t("greeting.p2")}<span className="text-blue-500"> Fahri</span>
            </p>

            <div className="mt-5 mb-5 sm:text-4xl font-bold text-blue-500 md:text-left text-center">
              <Typewriter
                options={{
                  strings: ['Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              /></div>
            <div className="flex md:justify-start justify-center">
      <button className="bg-blue-500 px-4 py-2 mr-3 text-lg font-semibold tracking-wider text-white rounded hover:bg-blue-600"><Link href="/contact"><a >{t("button.contact")}</a></Link></button>
      <button className="bg-blue-100 px-4 py-2 text-lg font-semibold tracking-wider text-blue-600 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"  ><a href={RESUME}>{t("button.download")}</a></button>
    </div>

          </div>
        </motion.div>
        <motion.div className="md:w-6/12  relative w-full mx-auto flex md:flex-row justify-center flex-col lg:mt-14 mt-0 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>
          <div className="rounded-full mx-auto relative lg:h-[400px] lg:w-[400px] h-[330px] w-[330px] px-5 border-4 border-green-500 hover:border-green-400 ">
            <img src="mongodb.svg" alt="" className="ml-4 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 border glassmorphism-25 hover:bg-gray-400 z-10" />
            <img src="expressjs.svg" alt="" className="right-8 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 border glassmorphism-25 hover:bg-gray-400 z-10" />
            <img src="react-2.svg" alt="" className="lg:-ml-14 -ml-9 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 mt-52 border glassmorphism-25 hover:bg-gray-400" />
            <img src="node-js.svg" alt="" className="lg:-right-8 -right-3 flex absolute animate-wiggle lg:w-20 w-16 h-16 lg:h-20 w-16 h-16 rounded-full p-2 mt-52 border glassmorphism-25 hover:bg-gray-400" />
            <img src="porto.png" alt="" height="550" className=" absolute lg:h-[500px] h-[415px] " />
          </div>
        </motion.div>
      </div>

    </>
  )
}