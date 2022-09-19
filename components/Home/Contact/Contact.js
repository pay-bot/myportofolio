import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Form from './Form';
import Title from '../../Title';
import Description from '../../Description';
import { RESUME } from '../resume';
import ContactIcon from './ContactIcon';

export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <>
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        id="hire"
        className=" section-base flex lg:flex-row flex-col my-10 "
      >
        <div className="lg:w-6/12 w-full mr-5 ">
          <Title>{t('hire.title')}</Title>
          <Description>{t('hire.p')}</Description>
          <div data-aos="fade-up" className="flex mb-5">
            <button
              type="button"
              className="bg-[#008FFF] dark:bg-[#45ADFF] px-4 py-2 mr-3 text-lg font-semibold tracking-wider text-white rounded hover:bg-blue-600"
            >
              <Link href="/portofolio">
                <a>Portofolio</a>
              </Link>
            </button>
            <button
              type="button"
              className="bg-blue-100 px-4 py-2 text-lg font-semibold tracking-wider text-blue-600 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <a href={RESUME}>{t('button.download')}</a>
            </button>
          </div>
          <ContactIcon />
        </div>

        <div className="lg:w-6/12 w-full flex flex-col h-full mx-auto">
          <Form />
        </div>
      </div>
    </>
  );
}
