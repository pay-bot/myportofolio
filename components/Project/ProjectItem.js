
import ProjectCardRight from "./ProjectCardRight"
import ProjectCard from "./ProjectCard"

export default function ProjectItem() {
  return (
    <>

      <ProjectCard
        image="myporto.png"
        judul="MyPortofolio"
        deskripsi="aplikasi Portofolio"
        deskripsiCard="Web app selects and lets you solve algorithmic problems of your level by looking at your Codeforces rating."
        tech="NextJS      Tailwind"
        href="https://myportofolio-vert.vercel.app/"
      />
      <ProjectCardRight
        image="dipoles.png"
        judul="dipoles"
        deskripsi="aplikasi jasa poles lantai"
        deskripsiCard="Web app selects and lets you solve algorithmic problems of your level by looking at your Codeforces rating."
        tech="NextJS  Tailwind"
        href="https://dipoles.vercel.app/"
      />
    </>
  )
}
