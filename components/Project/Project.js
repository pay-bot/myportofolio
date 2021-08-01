import ProjectItem from './ProjectItem'
import { motion } from "framer-motion"

export default function Project() {
  return (
    <>
      <motion.div className="lg:w-9/12 w-11/12 mx-auto mt-10 lg:px-5 px-0 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <ProjectItem />
      </motion.div>
    </>
  )
}
