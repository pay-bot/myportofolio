import ProjectCard from '../components/ProjectCard'
import Wrapper from '../layouts/Wrapper'

const project = () => {
  return (
    <Wrapper>
      <div className="w-11/12 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
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
