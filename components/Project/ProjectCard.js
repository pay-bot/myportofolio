import Link from "next/link"
import clsx from "clsx";

export default function ProjectCard({ href, image, judul, deskripsiCard, techImage, rightShift }) {
  return (
    <>
      <div className={clsx("flex md:mb-20 mb-10", rightShift && "flex-row-reverse")}>
        <div className={clsx("z-30 hover:md:z-0 hover:-z-10 md:w-7/12 w-11/12 md:relative absolute  ", rightShift && ""
        )}>
          <img src={image} alt="" className=" transform transition duration-500 ease-in-out md:hover:scale-110  rounded shadow-2xl md:h-[400px] h-[314px] " />
        </div>
        <div className={clsx("md:opacity-100 mt-5 opacity-0 transform transition duration-1000 ease-in-out hover:opacity-100 select-none md:w-5/12 w-full md:z-30 z-0 hover:z-30 relative md:px-0 px-3 md:py-0 pt-2  dark:md:bg-transparent dark:bg-gray-700 dark:bg-opacity-90 bg-white bg-opacity-80 md:bg-opacity-0 rounded ", rightShift && "flex-row-reverse ")}
        >
          <p className={clsx("capitalize mb-5 text-right text-xl font-semibold dark:md:text-white md:text-gray-700 text-black dark:text-white ", rightShift && "md:text-left text-right flex ")}>{judul}</p>
          <div className={clsx("md:py-5 md:-ml-20 -ml-0 md:px-5 md:mt-14 mt-6 md:shadow-xl shadow-none md:bg-white  dark:md:bg-gray-700 dark:md:text-white md:text-gray-700 text-black dark:text-white rounded absolute flex ", rightShift && "flex md:-ml-0 md:-mr-20 -mr-0 ")}>
            <p className={clsx("flex text-right text-lg dark:md:text-white md:text-gray-700 text-black dark:text-white md:mr-0 mr-3", rightShift && "text-left flex")}>
              {deskripsiCard}
            </p>
          </div>
          <div className={clsx("bottom-0 md:mt-0 mt-36 md:bottom-14 flex justify-start right-0 mb-5 flex-row-reverse md:absolute relative ", rightShift && "flex  flex-row md:left-0 right-0 justify-start")}>
            {techImage.map((tech, i) =>
              <img key={tech} src={tech} className="w-8 h-8 mx-2 transform transition duration-500 ease-in-out hover:scale-125" alt="" />

            )}
          </div>
          <Link href={href}><a className="">
            <div className="transform transition duration-500 ease-in-out hover:scale-110 items-center flex -z-30 md:mt-[310px] my-5 mx-1 justify-center border tracking-widest rounded font-semibold py-1 bg-[#45ADFF] text-white">
              <img src="/right-arrow.svg" alt="" className="w-8 h-5  mx-3 " />
              <p className="">View Project</p>
              <img src="/left-arrow.svg" alt="" className="w-8 h-5  mx-3 block" />
            </div>
          </a></Link>
        </div>
      </div>
    </>
  )
}