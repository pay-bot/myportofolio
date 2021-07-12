import Link from "next/link"

export default function AboutCard() {
  return (
    <>
      <div className="lg:w-4/12 md:w-3/12 w-full lg:m-3 mx-auto ">
        <img src="code.webp" className="h-full rounded-md md:rounded-full " alt="" />
      </div>
      <div className="lg:w-8/12 w-full lg:m-3  mx-auto ">
        <div className="items-center h-full">
          <div className="mx-auto flex lg:mt-0 mt-4 items-center h-full">
            <div className="">
              <p className="mb-5 text-gray-800 dark:text-gray-300 text-justify">
                Saya adalah Web Develover yang fokus kepada bahasa pemrograman JavaScript. saya menggunakan RactJS sebagai library JavaScript dan menggunakan NextJS sebagai framework. saya sangat senang menggunakan NextJS dan Tailwind CSS.  </p>
              <div className="flex mb-2">
                <img src="profile-svgrepo-com.svg" alt="" className="w-6 h-6 " />
                <span className="mx-3 font-semibold">Fahri Alpiansyah</span>
              </div>
              <div className="flex mb-2">
                <img src="profile-svgrepo-com.svg" alt="" className="w-6 h-6 " />
                <span className="mx-3 font-semibold">11 oktober 1995</span>
              </div>
              <div className="flex mb-2">
                <img src="profile-svgrepo-com.svg" alt="" className="w-6 h-6 " />
                <span className="mx-3 font-semibold">Depok</span>
              </div>
            </div>
          </div>
          <div className="flex justify-around lg:-mt-5 md:mt-5 mt-5">
            <Link href="https://github.com/pay-bot"><a className=""><img src="github.svg" alt="" className="w-20" /></a></Link>
            <img src="facebook.svg" alt="" className="w-20" />
            <img src="instagram-text.svg" alt="" className="w-20" />
          </div>
        </div>
      </div>
    </>
  )
}