

export default function SoftSkills() {

  return (
    <>
      <div className="lg:w-9/12 w-11/12 mx-auto">
        <p className="text-left text-4xl font-semibold pb-5">
          Pelayanan terbaik saya
          </p>
        <div className="flex lg:flex-row flex-col shadow-xl">
          <div className="lg:w-6/12 w-full mx-auto">
            <p className="text-xl font-semibold ">Favorit</p>
            <div className="p-5">
              <img src="/images/next.svg" alt="" className="w-24 h-20 border-4 border-black rounded-xl p-1 mb-3" />
              <p className="text-xl ">Next JS</p>
              <p className="text-md mb-3 text-justify">Next.js adalah sebuah React framework yang dibuat untuk mengatasi masalah client-side rendering yang dimiliki React.</p>
              <img src="/images/tailwind.svg" alt="" className="w-24 h-20 border-4 border-black rounded-xl p-1" />
              <p className="text-xl mt-3">Tailwind</p>
              <p className="text-md mb-3 text-justify">Tailwind CSS merupakan framework yang bersifat utility-first untuk membangun desain antarmuka khusus dengan cepat.</p>
            </div>
          </div>
          <div className="lg:w-6/12 w-full mx-auto">
            <p className="text-xl font-semibold ">Prinsip</p>
            <div className="p-5">

              <img src="responsive.svg" alt="" className="w-24 h-20 border-4 border-black rounded-xl p-1" />
              <p className="text-xl mt-3">Responsive</p>
              <p className="text-md mb-3 text-justify">Responsive web design adalah sebuah metode bagi web designer untuk membuat suatu layout website yang dapat menyesuaikan diri sesuai dengan ukuran layar pengguna.</p>
              <img src="cleancode.png" alt="" className="w-24 h-20 mb-3" />
              <p className="text-xl ">Clean Code</p>
              <p className="text-md mb-3 text-justify">Clean Code adalah kode di dalam perangkat lunak (software) yang formatnya benar dan disusun dengan baik dan rapi agar kode programnya mudah dibaca,dimengerti,ditelusuri oleh siapapun</p>
              {/* <img src="/images/tailwind.svg" alt="" className="w-24" />
              <p className="text-xl mt-3">Tailwind</p>
              <p className="text-md mb-3 text-justify">Tailwind CSS merupakan framework yang bersifat utility-first untuk membangun desain antarmuka khusus dengan cepat.</p> */}

            </div>
          </div>
        </div>
      </div>

    </>
  )
}