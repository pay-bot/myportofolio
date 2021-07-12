import ProjectItem from './ProjectItem'
import ProjectTitle from './ProjectTitle'
import ProjectDesc from "./ProjectDesc"

export default function Index() {
  return (
    <>
      <div className="lg:w-9/12 w-11/12 mx-auto mt-28 lg:px-5 px-0 mb-10">
        <ProjectTitle>Project</ProjectTitle>
        <ProjectDesc>Project yang telah saya kerjakan</ProjectDesc>
        <ProjectItem />
      </div>
    </>
  )
}
