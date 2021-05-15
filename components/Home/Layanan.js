import LayananCard from "./LayananCard"
import LayananCardTitle from "./LayananCardTitle"
import LayananTitle from "./LayananTitle"

export default function Layanan() {

  return (
    <>
      <div className="lg:w-9/12 w-11/12 mx-auto py-10">
        <LayananTitle>Layanan terbaik saya</LayananTitle>
        <div className="p-5">
          <LayananCardTitle>Favorit</LayananCardTitle>
          <div className="w-full mx-auto flex lg:flex-row flex-col">
            <LayananCard
              image="/images/next.svg"
              item="NextJS"
              description="Next.js adalah sebuah React framework yang dibuat untuk mengatasi masalah client-side rendering yang dimiliki React.
              "
            />
            <LayananCard
              image="/images/tailwind.svg"
              item="Tailwind"
              description="Tailwind CSS merupakan framework yang bersifat utility-first untuk membangun desain antarmuka khusus dengan cepat..
              "
            />
          </div>
          <LayananCardTitle>Prinsip</LayananCardTitle>
          <div className="w-full mx-auto flex lg:flex-row flex-col">

            <LayananCard
              image="responsive.svg"
              item="Responsive"
              description="Responsive web design adalah sebuah metode bagi web designer untuk membuat suatu layout website yang dapat menyesuaikan diri sesuai dengan ukuran layar pengguna.
              "
            />
            <LayananCard
              image="cleancode.png"
              item="Clean Code"
              description="Clean Code adalah kode di dalam aplikasi yang formatnya benar dan disusun dengan baik dan rapi agar kode programnya mudah dibaca,dimengerti,ditelusuri oleh siapapun
              "
            />
          </div>
        </div>
      </div>
    </>
  )
}