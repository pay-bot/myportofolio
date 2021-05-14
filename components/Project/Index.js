import ProjectItem from './ProjectItem'
import ProjectTitle from './ProjectTitle'
import ProjectDesc from "./ProjectDesc"

export default function Index() {
  return (
    <>
      <div className="lg:w-9/12 w-11/12 mx-auto mt-28 px-8">
        <ProjectTitle>Project</ProjectTitle>
        <ProjectDesc>Project yang telaha saya kerjakan</ProjectDesc>
        <ProjectItem />
      </div>
    </>
  )
}
