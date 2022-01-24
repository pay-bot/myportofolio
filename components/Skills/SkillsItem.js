import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { skills } from './Skills';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';

export default function SkillsItem() {
  const router = useRouter();
  const { locale } = router;
  const language = locale;

  const interval = 30;
  const dispatch = useDispatch();
  

  
  return (
    <>
      <div className="grid -mx-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
        {skills.map((data, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-offset={i % 2 === 0 ? (interval + 10) * i : interval * i++}
            className=""
            onClick={() => dispatch(openModal({ name: 'SkillDetail', id: data.id }))}
          >
            <div className="transform transition duration-500 ease-in-out hover:scale-110 dark:bg-gradient-to-t dark:from-blue-600 dark:via-gray-700 dark:to-gray-900 border-gray-600 dark:border-gray-600 bg-white p-6 flex flex-col items-center m-2 justify-center">
              <div className="relative w-24 h-24">
                <Image
                  layout="fill"
                  objectFit="fill"
                  className=""
                  src={data.image}
                  alt={data.alt}
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="block text-xl mb-2 dark:text-white">
                  {data.title}
                </span>
              </div>
              <div className="nm-inset-white-100 dark:nm-inset-gray-100 w-full py-3 text-center ">
                <p className="font-semibold dark:text-white">
                  {language === 'en' ? data.level : data.level_idn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
