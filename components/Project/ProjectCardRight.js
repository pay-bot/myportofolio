import Link from "next/link"

export default function ProjectCardRight({ href, image, judul, deskripsi, deskripsiCard, tech }) {
  return (
    <>
      <div className="flex mb-20">

        <div className="md:w-5/12 z-30 w-full relative md:mt-10 mt-0 md:px-0 md:py-0 pt-2 px-3  dark:md:bg-transparent bg-gray-700 dark:bg-gray-50 dark:bg-opacity-90 bg-opacity-90 md:bg-opacity-0 rounded ">
          <Link href={href}><a href="" className="">
            <p className="capitalize  md:text-left text-right text-xl font-semibold dark:md:text-white md:text-gray-700 text-white dark:text-gray-600 ">{judul}</p>
            <p className="text-right capitalize md:text-md text-md font-semibold dark:md:text-white md:text-left md:text-gray-700 text-white dark:text-gray-600 ">{deskripsi}</p>
            <div className="md:py-5 md:-mr-20 -mr-0 md:px-10 pr-3 md:mt-14 mt-12 md:shadow-xl shadow-none md:bg-white dark:md:bg-gray-700  dark:md:text-white md:text-gray-700 text-white dark:text-gray-600 rounded absolute flex ">
              <p className="text-right md:text-left text-md dark:md:text-white md:text-gray-700 text-white dark:text-gray-600">
                {deskripsiCard}
              </p>
            </div>
          </a></Link>
          <div className="text-right md:mt-20 mt-40 bottom-0 md:bottom-5 md:left-0  mb-5 flex dark:md:text-white md:text-gray-700 text-white dark:text-gray-600 text-lg font-semibold md:absolute relative justify-end">{tech}</div>
        </div>
        <div className="md:w-7/12 md:relative absolute md:mr-0 mr-4 ">
          <Link href={href}><a>
            <img src={image} alt="" className=" rounded shadow-2xl md:h-[400px] h-[266px]" />
          </a></Link>
        </div>
      </div>
    </>
  )
}