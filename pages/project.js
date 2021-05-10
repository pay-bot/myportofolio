import ProjectCard from '../components/ProjectCard'
import Wrapper from '../layouts/Wrapper'

const project = () => {
  return (
    <Wrapper>
      <div className="lg:w-9/12 w-11/12 mx-auto lg:py-10 py-5 ">
        <h1 className='text-2xl text-gray-700 font-semibold text-center'>Project</h1>
        <p className="text-center text-md text-gray-500  mb-10">Project yang telah saya kerjakan</p>
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
