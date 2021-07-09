import Button from "./Button"
import Typewriter from 'typewriter-effect';

export default function Greeting() {
  return (
    <>
      <div className="lg:text-left text-center mt-24">
        <p className="text-4xl sm:text-5xl md:text-left text-center md:text-6xl font-black  dark:text-white">Halo...</p>
        <p className="text-4xl sm:text-5xl md:text-left text-center md:text-6xl font-black  dark:text-white">Saya <span className="text-blue-500">Fahri</span>
        </p>

        <div className="mt-5 mb-5 sm:text-4xl font-bold text-blue-500 ">
          <Typewriter
            options={{
              strings: ['Web Developer'],
              autoStart: true,
              loop: true,
            }}
          /></div>
        <Button />
        <div className="flex mt-16">
          <img src="github.svg" alt="" className="h-[30px]" />
        </div>
      </div>

    </>
  )
}