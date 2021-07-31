import Link from "next/link"
import clsx from "clsx";

export default function ProjectCard({ href, image, judul, deskripsi, deskripsiCard, techImage, rightShift }) {
  return (
    <>
      <div className={clsx("flex mb-20", rightShift && "flex-row-reverse")}>
        <div className={clsx("md:w-7/12 md:relative absolute md:mr-0 mr-4 ", rightShift && ""
        )}><Link href={href}><a>
          <img src={image} alt="" className=" rounded shadow-2xl md:h-[400px] h-[266px] " />
        </a></Link>
        </div>
        <div className={clsx("md:w-5/12 w-full -z-30 relative md:mt-10 mt-0 md:px-0 md:py-0 pt-2 px-3 dark:md:bg-transparent dark:bg-gray-700 dark:bg-opacity-90 bg-gray-50 bg-opacity-80 md:bg-opacity-0 rounded ", rightShift && "flex")}>
          <Link href={href}><a href="" className="">
            <p className={clsx("capitalize  md:text-right text-left text-xl font-semibold dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200 ", rightShift && "md:text-left flex")}>{judul}</p>
            <p className="md:text-right text-left capitalize md:text-md text-md font-semibold dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200 ">{deskripsi}</p>
            <div className={clsx("md:py-5 md:-ml-20 -ml-0 md:px-10 md:mt-14 mt-12 md:shadow-xl shadow-none md:bg-white dark:md:bg-gray-700 dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200 rounded absolute flex ", rightShift && "flex md:ml-0 md:-mr-20 -mr-0 ")}>
              <p className={clsx("md:text-right text-left text-md dark:md:text-gray-200 md:text-gray-700 text-gray-600 dark:text-gray-200", rightShift && "md:text-left flex")}>
                {deskripsiCard}
              </p>
            </div>
          </a></Link>
          <div className={clsx("md:mt-20 mt-40 bottom-0 md:bottom-5 right-0 mb-5 flex md:absolute relative ", rightShift && "flex left-0")}>
          {techImage.map((tech, i) => 
            <img key={tech} src={tech} className="w-8 h-8 mx-2" alt="" />
          
          )}
          </div>
        </div>
      </div>
    </>
  )
}