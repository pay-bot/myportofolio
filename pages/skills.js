import React from 'react'
import Wrapper from '../layouts/Wrapper'
import Head from 'next/head'
import SEO_DATA from '../components/seo'
import SkillsCard from '../components/SkillsCard'

const skills = () => {
  return (
    <Wrapper>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'Skills'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Skills'}</title>
      </Head>
      <div className='lg:w-9/12 w-full mb-4 mx-auto mt-28 px-4'>
        <h1 className='text-2xl text-gray-700 dark:text-gray-300 font-semibold text-center'>Skills</h1>
        <p className="text-center text-md text-gray-500 dark:text-gray-400 mb-2">Kemampuan yang saya miliki</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          <SkillsCard
            image="/images/js.png"
            alt="Javascript"
            title="Javascript"
            desc="1 Year "
            descspan="experience"
          />
          <SkillsCard
            image="/images/js.png"
            alt="Javascript"
            title="Javascript"
            desc="1 Year "
            descspan="experience"
          />
          <SkillsCard
            image="/images/js.png"
            alt="Javascript"
            title="Javascript"
            desc="1 Year "
            descspan="experience"
          />
          <SkillsCard
            image="/images/js.png"
            alt="Javascript"
            title="Javascript"
            desc="1 Year "
            descspan="experience"
          />
          <SkillsCard
            image="/images/js.png"
            alt="Javascript"
            title="Javascript"
            desc="1 Year "
            descspan="experience"
          />

        </div>
      </div>

    </Wrapper>
  )
}

export default skills
