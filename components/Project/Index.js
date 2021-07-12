import ProjectItem from './ProjectItem'
import ProjectTitle from './ProjectTitle'
import ProjectDesc from "./ProjectDesc"
import { motion } from "framer-motion"

export default function Index() {
  return (
    <>
      <motion.div className="lg:w-9/12 w-11/12 mx-auto mt-28 lg:px-5 px-0 mb-10"
        initial={{ scale: 0, y: "-100%" }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <ProjectTitle>Project</ProjectTitle>
        <ProjectDesc>Project yang telah saya kerjakan</ProjectDesc>
        <ProjectItem />
      </motion.div>
    </>
  )
}
