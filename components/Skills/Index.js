
import SkillsDesc from './SkillsDesc'
import SkillsItem from './SkillsItem'
import SkillsTitle from './SkillsTitle'
import { motion } from "framer-motion"

export default function Index() {
  return (
    <>
      <motion.div className='lg:w-9/12 w-full mb-4 mx-auto mt-28 md:px-4 px-0'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 2 }}>
        
        <SkillsTitle>Keterampilan</SkillsTitle>
        <SkillsDesc>Keterampilan yang saya miliki</SkillsDesc>
        <SkillsItem />
      </motion.div>
    </>
  )
}
