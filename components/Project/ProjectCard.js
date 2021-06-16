import Link from "next/link"

export default function ProjectCard({ href, image, judul, deskripsi, deskripsiCard, techImage }) {
  return (
    <>
      <div className="flex mb-20">
        <div className="md:w-7/12 md:relative absolute md:mr-0 mr-4 "><Link href={href}><a>
          <img src={image} alt="" className=" rounded shadow-2xl md:h-[400px] h-[266px] " />
        </a></Link>
        </div>
        <div className="md:w-5/12 w-full -z-30 relative md:mt-10 mt-0 md:px-0 md:py-0 pt-2 px-3 dark:md:bg-transparent dark:bg-gray-700 dark:bg-opacity-90 bg-gray-50 bg-opacity-80 md:bg-opacity-0 rounded ">
          <Link href={href}><a href="" className="">
            <p className="capitalize  md:text-right text-left text-xl font-semibold dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200 ">{judul}</p>
            <p className="md:text-right text-left capitalize md:text-md text-md font-semibold dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200 ">{deskripsi}</p>
            <div className="md:py-5 md:-ml-20 -ml-0 md:px-10 md:mt-14 mt-12 md:shadow-xl shadow-none md:bg-white dark:md:bg-gray-700 dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200 rounded absolute flex ">
              <p className="md:text-right text-left text-md dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200">
                {deskripsiCard}
              </p>
            </div>
          </a></Link>
          <div className="text-right md:mt-20 mt-40 bottom-0 md:bottom-5 right-0 mb-5 flex md:absolute relative dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200 text-lg font-semibold"><img src={techImage} alt="" /></div>
        </div>
      </div>
    </>
  )
}