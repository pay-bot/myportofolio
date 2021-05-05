import Link from "next/link"

export default function ProjectCard({ href, image, judul, deskripsi }) {
  return (
    <>
      <div className="border shadow-lg rounded-lg"><Link href={href}><a>
        <img src={image} alt="" className="rounded-lg" />
        <p className="uppercase  text-center text-md font-semibold text-gray-800 my-2">{judul}</p>
        <p className="text-center text-sm text-gray-400 mb-2">{deskripsi}</p></a></Link>
      </div>
    </>
  )
}