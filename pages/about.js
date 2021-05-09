import React from 'react'
import Wrapper from '../layouts/Wrapper'

const about = () => {
  return (
    <Wrapper>
      <div className="bg-blue-700 h-[250px] w-full -mb-32"><p className="text-center text-lg font-semibold">Tentang Saya</p>
      </div>
      <div className="lg:w-9/12 bg-white h-[350px] w-full mx-auto rounded-md shadow-md">

        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-3/12 w-full mx-auto p-5">
            <img src="mario.png" className="h-[300px]" alt="" />
          </div>
          <div className="lg:w-9/12 w-full mx-auto p-5">
            <p className="">
              Saya adalah fullstack app developer yang selalu berusaha melakukan yang terbaik disetiap pekerjaan. Menjadi seorang app developer adalah impian saya sejak dulu. Berkat rasa ingin tahu dan keinginan untuk terus belajar, sekarang saya berhasil menguasai beberapa pengetahuan dalam bidang pengembangan aplikasi.</p>

            <div className="flex">
              <p className="flex"><img src="calendar-date-svgrepo-com.svg" alt="" className="" />tes</p>
            </div>
            <div className="flex">
              <p className="flex"><img src="calendar-date-svgrepo-com.svg" alt="" className="" />tes</p>
            </div>
            <div className="flex">
              <p className="flex"><img src="calendar-date-svgrepo-com.svg" alt="" className="" />tes</p>
            </div>
            <div className="flex">
              <p className="flex"><img src="calendar-date-svgrepo-com.svg" alt="" className="" />tes</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default about
