import Link from "next/link"

export default function ProjectCard({ href, image, judul, deskripsi }) {
  return (
    <>
      <div className="shadow-lg rounded-lg bg-blue-700"><Link href={href}><a>
        <img src={image} alt="" className="rounded-lg" />
        <div className="bg-blue-700">
          <p className="uppercase  text-center text-md font-semibold text-gray-800 my-2">{judul}</p>
          <p className="text-center text-sm text-gray-400 mb-2">{deskripsi}</p>
        </div>
      </a></Link>
      </div>
    </>
  )
}