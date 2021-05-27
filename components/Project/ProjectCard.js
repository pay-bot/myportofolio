import Link from "next/link"

export default function ProjectCard({ href, image, judul, deskripsi }) {
  return (
    <>
      <div className="shadow-lg bg-gray-50 dark:bg-gray-700"><Link href={href}><a>
        <img src={image} alt="" className="px-5 pt-5" />
        <div className="bg-gray-50 dark:bg-gray-700">
          <p className="capitalize  text-center text-md font-semibold text-gray-700 dark:text-gray-300 my-2">{judul}</p>
          <p className="text-center capitalize text-sm text-gray-500 dark:text-gray-400 mb-2">{deskripsi}</p>
        </div>
      </a></Link>
      </div>
    </>
  )
}