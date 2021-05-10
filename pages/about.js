import React from 'react'
import Wrapper from '../layouts/Wrapper'

const about = () => {
  return (
    <Wrapper>
      <div className="mt-10">

        <p className="text-center capitalize font-semibold text-gray-700 text-2xl">tentang</p>
        <p className="text-center mb-5 text-gray-500 text-md ">Profil singkat saya</p>
        <div className="lg:w-9/12 w-11/12 bg-gray-100 lg:h-[350px] h-full mx-auto shadow-xl flex lg:flex-row flex-col lg:mb-0 mb-5">
          <img src="mario.png" className="lg:h-[350px] h-[450px] p-5" alt="" />
          <div className="mx-auto lg:p-5 pt-0 px-5 pb-5">
            <p className="pb-5 text-gray-500 text-justify">
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
