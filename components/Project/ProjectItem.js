
import ProjectCard from "./ProjectCard"

export default function ProjectItem() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <ProjectCard
          image="dipoles.png"
          judul="dipoles"
          deskripsi="aplikasi jasa poles lantai"
          href="https://dipoles.vercel.app/"
        />
        <ProjectCard
          image="myporto.png"
          judul="MyPortofolio"
          deskripsi="aplikasi Portofolio"
          href="https://myportofolio-vert.vercel.app/"
        />

      </div>
    </>
  )
}
