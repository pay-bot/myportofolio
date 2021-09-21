import React from 'react';
import Image from 'next/image';

export default function ContactIcon() {
  const icon = [
    {
      img: '/location.svg',
      desc: 'Depok, Jawa Barat'
    },
    {
      img: '/phone.svg',
      desc: '08984629140'
    },
    {
      img: '/mail.svg',
      desc: 'afahri22@yahoo.com'
    }
  ];
  return (
    <>
      {icon.map((data, i) => (
        <div key={i} className="flex">
          <div className="relative w-6 h-6" data-aos="fade-up">
            <Image
              src={data.img}
              alt=""
              className=""
              layout="fill"
              objectFit="fill"
              loading="eager"
            />
          </div>
          <p data-aos="fade-left" className="mx-3 mb-7 dark:text-gray-200 ">
            {data.desc}
          </p>
        </div>
      ))}
    </>
  );
}
