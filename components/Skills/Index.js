
import SkillsDesc from './SkillsDesc'
import SkillsItem from './SkillsItem'
import SkillsTitle from './SkillsTitle'
import { motion } from "framer-motion"

export default function Index() {
  return (
    <>
      <motion.div className='lg:w-9/12 w-full mb-4 mx-auto mt-28 md:px-4 px-0'
      initial={{ scale: 0, y: "-100%" }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 1 }}>
        <SkillsTitle>Keterampilan</SkillsTitle>
        <SkillsDesc>Keterampilan yang saya miliki</SkillsDesc>
        <SkillsItem />
      </motion.div>
    </>
  )
}
