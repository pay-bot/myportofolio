export default function AboutCard() {
  return (
    <>
      <img src="portofolio.png" className="lg:h-[300px] h-[450px] m-auto pl-3" alt="" />
      <div className="mx-auto lg:p-5 pt-0 px-5 pb-5">
        <p className="pb-5 text-gray-800 dark:text-gray-300 text-justify">
          Saya adalah Web Develover yang fokus kepada bahasa pemrograman JavaScript. saya menggunakan RactJS sebagai library JavaScript dan menggunakan NextJS sebagai framework. saya sangat senang menggunakan NextJS dan Tailwind CSS.  </p>
        <div className="flex p-3">
          <img src="profile-svgrepo-com.svg" alt="" className="w-8 h-8 ml-3" />
          <span className="mx-3 font-semibold">Fahri Alpiansyah</span>
        </div>
        <div className="flex p-3">
          <img src="profile-svgrepo-com.svg" alt="" className="w-8 h-8 ml-3" />
          <span className="mx-3 font-semibold">11 oktober 1995</span>
        </div>
        <div className="flex p-3">
          <img src="profile-svgrepo-com.svg" alt="" className="w-8 h-8 ml-3" />
          <span className="mx-3 font-semibold">Depok</span>
        </div>
      </div>
    </>
  )
}