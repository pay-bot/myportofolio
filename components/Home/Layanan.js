import React from 'react';
import { useTranslation } from 'next-i18next';
import LayananCard from './LayananCard';
import LayananCardTitle from './LayananCardTitle';
import Title from '../Title';
import About from '../About/About';
import Index from '../Skills/Index';
import Description from '../Description';


export default function Layanan() {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="w-full items-center flex mx-auto  dark:bg-[#273658]  bg-[#EAECF4]  py-16">
        <div className="w-full px-4 mx-auto rounded lg:w-8/12 lg:px-0 md:px-8 ">
          <div className="">
            <About />
            <Index />
            <Title>{t('service.title')}</Title>
            <Description>{t('service.desc')}</Description>
            <div className="p-5 bg-white">
            <LayananCardTitle>{t('service.favorite')}</LayananCardTitle>
            <div
              data-aos="fade-up-right"
              className="flex flex-col w-full mx-auto lg:flex-row"
            >
              <LayananCard
                image="/images/next.svg"
                item="NextJS"
                description={t('service.next')}
              />
              <LayananCard
                image="/images/tailwind.svg"
                item="Tailwind"
                description={t('service.tailwind')}
              />
            </div>
            <LayananCardTitle>{t('service.discipline')}</LayananCardTitle>
            <div
              data-aos="fade-up-left"
              className="flex flex-col w-full mx-auto lg:flex-row"
            >
              <LayananCard
                image="responsive.svg"
                item={t('service.responsive')}
                description={t('service.presponsive')}
              />
              <LayananCard
                image="cleancode.png"
                item={t('service.clean')}
                description={t('service.pclean')}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
