import React from 'react'
import AboutCard from '../components/AboutCard'
import Wrapper from '../layouts/Wrapper'

const about = () => {
  return (
    <Wrapper>
      <div className="mt-10">

        <p className="text-center capitalize font-semibold text-gray-700 text-2xl">tentang</p>
        <p className="text-center mb-5 text-gray-500 text-md ">Profil singkat saya</p>
        <div className="lg:w-9/12 w-11/12 bg-white lg:h-[350px] h-full mx-auto shadow-xl flex lg:flex-row flex-col lg:mb-0 mb-5">
          <AboutCard />
        </div>
      </div>
    </Wrapper>
  )
}

export default about
