import React from 'react'

export default function Berita3({ data }) {
  return (
    <>
      <div className="card-zoom shadow-xl w-full">
        <img src={`${data.cat.code}`} alt="" className="h-[225px] card-zoom-image" />
        <div className="absolute bottom-3 p-3 w-full ">
          <p className="text-white capitalize font-semibold lg:text-2xl text-md">{data.cat.name}</p>
        </div>
      </div>

    </>
  )
}
