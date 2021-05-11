import ProjectCard from '../components/ProjectCard'
import Wrapper from '../layouts/Wrapper'
import Head from 'next/head'
import SEO_DATA from '../components/seo'

const project = () => {
  return (
    <Wrapper>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'Project'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Project'}</title>
      </Head>
      <div className="lg:w-9/12 w-11/12 mx-auto mt-28 px-8">
        <h1 className='text-2xl text-gray-700 dark:text-gray-300 font-semibold text-center'>Project</h1>
        <p className="text-center text-md text-gray-500  mb-5">Project yang telah saya kerjakan</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <ProjectCard
            image="dipoles.png"
            judul="dipoles"
            deskripsi="aplikasi jasa poles lantai"
            href="https://dipoles.vercel.app/"
          />
          <ProjectCard
            image="dipoles.png"
            judul="dipoles"
            deskripsi="aplikasi jasa poles lantai"
            href=""
          />
          <ProjectCard
            image="dipoles.png"
            judul="dipoles"
            deskripsi="aplikasi jasa poles lantai"
            href=""
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default project
