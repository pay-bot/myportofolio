import Link from "next/link"

export default function ProjectCard({ href, image, judul, deskripsi, deskripsiCard, tech }) {
  return (
    <>
      <div className="flex mb-20">
        <div className="lg:w-7/12 lg:relative absolute lg:mr-0 mr-4 "><Link href={href}><a>
          <img src={image} alt="" className=" rounded shadow-2xl lg:h-[400px] h-[261px] " />
        </a></Link>
        </div>
        <div className="lg:w-5/12 w-full -z-30 relative lg:mt-10 mt-0 lg:px-0 px-3  lg:bg-transparent bg-gray-700 bg-opacity-90 rounded ">
          <Link href={href}><a href="" className="">
            <p className="capitalize  lg:text-right text-left text-xl font-semibold dark:lg:text-gray-200 lg:text-gray-700 text-gray-200 dark:text-gray-200 ">{judul}</p>
            <p className="lg:text-right text-left capitalize lg:text-lg text-md font-semibold dark:lg:text-gray-200 lg:text-gray-700 text-gray-200 dark:text-gray-200 ">{deskripsi}</p>
            <div className="lg:py-5 lg:-ml-20 -ml-0 lg:px-10 lg:mt-14 mt-12 lg:shadow-xl shadow-none lg:bg-white dark:lg:bg-gray-700  dark:lg:text-gray-200 lg:text-gray-700 text-gray-200 dark:text-gray-200 rounded absolute flex ">
              <p className="lg:text-right text-left text-md dark:lg:text-gray-200 lg:text-gray-700 text-gray-200 dark:text-gray-200">
                {deskripsiCard}
              </p>
            </div>
          </a></Link>
          <div className="text-right lg:mt-20 mt-40 bottom-0 lg:bottom-5 right-0 mb-5 flex lg:absolute relative dark:lg:text-gray-200 lg:text-gray-700 text-gray-200 dark:text-gray-200 text-lg font-semibold">{tech}</div>
        </div>
      </div>
    </>
  )
}