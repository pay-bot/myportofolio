import Link from "next/link"

export default function SertifikatCard({ href, image, judul, deskripsi }) {
  return (
    <>
      <div className="transform hover:scale-110 shadow-2xl m-2"><Link href={href}><a>
        <img src={image} alt="" className="px-5 pt-5" />
        <div className="dark:bg-gray-700 bg-gray-300 ">
          <p className="uppercase  text-center text-md font-semibold text-gray-700 dark:text-gray-100 my-2">{judul}</p>
          <p className="text-center text-sm text-white0 dark:text-gray-200 mb-2">{deskripsi}</p>
        </div>
      </a></Link>
      </div>
    </>
  )
}