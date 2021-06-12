import Link from "next/link"

export default function ProjectCard({ href, image, judul, deskripsi, deskripsiCard, tech }) {
  return (
    <>
      <div className="flex mb-20">
        <div className="lg:w-7/12 lg:relative absolute lg:mr-0 mr-3"><Link href={href}><a>
          <img src={image} alt="" className=" rounded shadow-2xl" />
        </a></Link>
        </div>
        <div className="lg:w-5/12 w-full -z-30 relative lg:mt-10 mt-0 lg:px-0 px-3  lg:bg-transparent bg-gray-200 bg-opacity-10">
          <p className="capitalize  lg:text-right text-left text-xl font-semibold text-gray-700 dark:text-gray-300 ">{judul}</p>
          <p className="lg:text-right text-left capitalize text-lg font-semibold text-gray-500 dark:text-gray-400 ">{deskripsi}</p>
          <div className="lg:py-5 lg:-ml-20 -ml-0 lg:px-10 lg:mt-14 mt-8 lg:shadow-xl shadow-none lg:bg-white bg-transparent rounded absolute flex ">
            <p className="lg:text-right text-left text-md text-gray-700">
              {deskripsiCard}
            </p>
          </div>
          <div className="text-right lg:mt-20 mt-40 bottom-5 right-0 mb-5 flex lg:absolute relative">{tech}</div>
        </div>
      </div>
    </>
  )
}