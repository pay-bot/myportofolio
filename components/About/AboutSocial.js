import React, { useMemo } from 'react'
import Image from "next/image"
import Link from "next/link"



export default function AboutSocial() {
  const interval = 40

  const social = 
     [
      {
        img: "/github.svg",
        href: "https://github.com/pay-bot"
      },
      {
        img: "/facebook.svg",
        href: ""
      },
      {
        img: "/instagram-text.svg",
        href: ""
      },

    ]
  return (
    <>

        <div  className="flex justify-around items-center lg:mb-0 mb-5">
      {social.map((data, i) => (
          <div key={i} className="relative w-24 h-6">
            <Link href={data.href}><a className=""><Image src={data.img} alt="" layout="fill"
              objectFit="cover" data-aos="fade-up" data-aos-offset={interval * i} className="" /></a></Link>
          </div>
      ))}
        </div>

    </>
  )
}
