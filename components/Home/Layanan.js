import LayananCard from "./LayananCard"
import LayananCardTitle from "./LayananCardTitle"
import LayananTitle from "./LayananTitle"

export default function Layanan() {

  return (
    <>
      <div className="lg:w-9/12 w-11/12 mx-auto py-10">
        <LayananTitle>Layanan terbaik saya</LayananTitle>
        <div className="p-5">
          <LayananCardTitle>Favorite</LayananCardTitle>
          <div className="w-full mx-auto flex lg:flex-row flex-col">
            <LayananCard
              image="/images/next.svg"
              item="NextJS"
              description="NextJS membantu saya untuk menciptakan aplikasi yang powerfull dan mudah saya kontrol dengan segala fitur yang dimilikinya.
              "
            />
            <LayananCard
              image="/images/tailwind.svg"
              item="Tailwind"
              description="Tailwind CSS membantu saya membuat kit komponen yang mudah untuk saya custom.
              "
            />
          </div>
          <LayananCardTitle>Disiplin</LayananCardTitle>
          <div className="w-full mx-auto flex lg:flex-row flex-col">

            <LayananCard
              image="responsive.svg"
              item="Responsive"
              description="Membuat aplikasi responsive adalah suatu kewajiban untuk saya, agar pengguna dapat menikmati aplikasi saya di berbagai platform.
              "
            />
            <LayananCard
              image="cleancode.png"
              item="Clean Code"
              description="Membuat kode program yang bersih adalah ambisi saya, dengan kode yang bersih saya dapat dengan mudah menemukan bug pada aplikasi saya.
              "
            />
          </div>
        </div>
      </div>
    </>
  )
}