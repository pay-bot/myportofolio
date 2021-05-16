
import SertifikatCard from "./SertifikatCard"

export default function SertifikatItem() {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <SertifikatCard
          image="javascript.jpg"
          judul="Javascript"
          deskripsi="JavaScript Ultimate Course"
          href="https://www.udemy.com/share/1023hGAEIZcF5QTXUH/"
        />
      </div>
    </>
  )
}
