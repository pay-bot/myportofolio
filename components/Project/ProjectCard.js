import Link from "next/link"
import clsx from "clsx";

export default function ProjectCard({ href, image, judul, deskripsi, deskripsiCard, techImage, rightShift }) {
  return (
    <>
      <div className={clsx("flex md:mb-20 mb-10", rightShift && "flex-row-reverse")}>
        <div className={clsx("z-30 hover:md:z-0 hover:-z-10 md:w-7/12 md:relative absolute md:mr-0 mr-5 ", rightShift && "md:ml-0 md:-mr-0 -mr-0 ml-5"
        )}>
          <img src={image} alt="" className=" rounded shadow-2xl md:h-[400px] h-[266px] " />
        </div>
        <div className={clsx("select-none md:w-5/12 w-full  md:z-30 z-0 hover:z-30 relative md:mt-10 mt-0 md:px-0 px-3 md:py-0 pt-2  dark:md:bg-transparent dark:bg-gray-700 dark:bg-opacity-90 bg-white bg-opacity-80 md:bg-opacity-0 rounded ", rightShift && "flex-row-reverse ")}
        >
          <p className={clsx("capitalize text-right text-xl font-semibold dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 ", rightShift && "md:text-left text-right flex ")}>{judul}</p>
          <p className={clsx("text-right capitalize md:text-md text-lg font-semibold dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 ", rightShift && "md:text-left text-right flex ")}>{deskripsi}</p>
          <div className={clsx("md:py-5 md:-ml-20 -ml-0 md:px-5 md:mt-14 mt-10 md:shadow-xl shadow-none md:bg-white  dark:md:bg-gray-700 dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 rounded absolute flex ", rightShift && "flex md:-ml-0 md:-mr-20 -mr-0 ")}>
            <p className={clsx("flex text-right text-lg dark:md:text-gray-200 md:text-gray-700 text-black dark:text-gray-200 md:mr-0 mr-3", rightShift && "text-left flex")}>
              {deskripsiCard}
            </p>
          </div>
          <div className={clsx("md:mt-20 mt-40 bottom-0 md:bottom-5 flex justify-start right-0 mb-3 flex-row-reverse md:absolute relative ", rightShift && "flex  flex-row md:left-0 right-0 justify-start")}>
            {techImage.map((tech, i) =>
              <img key={tech} src={tech} className="w-8 h-8 mx-2" alt="" />

            )}
            <div className=""><Link href={href}><a className="relative "><img src="/link.svg" alt="" className="w-8 h-8 mx-2" /></a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}