export default function ProfileCard() {
  return (
    <>
      <div className="w-4/12 mx-auto">
        <div className="border-1 m-2 rounded-full bg-gradient-to-r from-indigo-600 to-gray-800 ">

          <img src="portofolio 1.svg" className="rounded-full p-1" />

        </div>
      </div>
      <div className="md:w-8/12 w-full">
        <p className="text-center text-lg font-semibold dark:text-gray-300">Fahri Alpiansyah</p>
        <p className="text-center text-sm dark:text-gray-300">Front-End</p>
        <p className="text-center text-sm dark:text-gray-300">Developer/Designer</p>
        <div className="border-2 border-gray-400 bg-gray-400 h-1 my-3 lg:ml-0 ml-3 mr-3"></div>
        <div className="flex justify-center mb-3">
          <img src="facebook.svg" alt="" className="w-5 mx-1" />
          <img src="github.svg" alt="" className="w-5 mx-1" />
          <img src="twitter.svg" alt="" className="w-5 mx-1" />
          <img src="youtube.svg" alt="" className="w-5 mx-1" />
          <img src="mail.svg" alt="" className="w-5 mx-1" />
        </div>
      </div>
    </>

  )
}