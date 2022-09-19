import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import Particles from 'react-particles-js';
import React from 'react';
import { buildUrl } from 'cloudinary-build-url';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';

export default function Hero() {
  const { t } = useTranslation('common');
  const particlesOption = {
    particles: {
      number: {
        value: 20
      },
      size: {
        value: 3
      },
      color: {
        value: '#0000ff'
      },
      line_linked: {
        enable: true,
        color: '#00B4D8',
        opacity: 0.4
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    }
  };

  const urlBlurred = buildUrl('portofolio/porto_nru7iy', {
    cloud: {
      cloudName: 'ds48xxpds'
    },
    transformations: {
      quality: 1
    }
  });

  const dispatch = useDispatch();

  return (
    <>
      <Particles
        params={particlesOption}
        className=" absolute left-0 w-screen h-full "
      >
      </Particles>

      <div className="  h-screen min-h-[600px] items-center flex mx-auto ">
        <motion.div
          className=" mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center  ">
            <p className="my-1 text-5xl font-bold dark:text-white">
              {t('greeting.p1')}
            </p>
            <p className="my-1 text-5xl font-bold dark:text-white">
              {t('greeting.p2')}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400">
                {' '}
                Fahri
              </span>
            </p>

            <div className="my-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400">
              <Typewriter
                options={{
                  strings: ['Front End', 'Web Developer'],
                  autoStart: true,
                  loop: true
              }}
              />
            </div>
            {/* <button
          className='btn'
          onClick={() => dispatch(openModal({ name: 'LoginRegister' }))}
        >
          Read full article
        </button> */}
          </div>
        </motion.div>
       
      </div>
    </>
  );
}
