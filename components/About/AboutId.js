import React, { useMemo } from 'react'
import Image from "next/image"

export default function AboutId() {
  const id =  [
      {
        img: "/id.svg",
        desc: "Fahri Alpiansyah"
      },
      {
        img: "/cake.svg",
        desc: "11 Oktober 1995"
      },
      {
        img: "/location.svg",
        desc: "Depok, Jawa Barat"
      },
      
    ]

  const interval = 30

  return (
    <>
    {id.map((data, i) => (
      <div key={i} className="flex mb-2">
        <div className="relative w-6 h-6  ">
                <Image src={data.img} alt="" layout="fill"
          objectFit="cover" data-aos="fade-up" data-aos-offset={interval * i} className="" />
          </div>
                <span data-aos="fade-left" data-aos-offset={(interval + 20) * i} className="mx-3 font-semibold dark:text-white">{data.desc}</span>
              </div>
      ))}

    </>
  )
}
