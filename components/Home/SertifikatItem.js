
import SertifikatCard from "./SertifikatCard"

export default function SertifikatItem() {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <SertifikatCard
          image="dipoles.png"
          judul="dipoles"
          deskripsi="aplikasi jasa poles lantai"
          href="https://dipoles.vercel.app/"
        />
        <SertifikatCard
          image="dipoles.png"
          judul="dipoles"
          deskripsi="aplikasi jasa poles lantai"
          href=""
        />
        <SertifikatCard
          image="dipoles.png"
          judul="dipoles"
          deskripsi="aplikasi jasa poles lantai"
          href=""
        />
      </div>
    </>
  )
}
