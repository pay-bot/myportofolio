
import SkillsDesc from './SkillsDesc'
import SkillsItem from './SkillsItem'
import SkillsTitle from './SkillsTitle'
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';


export default function Index() {
  const { t } = useTranslation('common');

  return (
    <>
      <motion.div className='lg:w-9/12 w-full mb-4 mx-auto mt-28 md:px-4 px-0'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 2 }}>
        
        <SkillsTitle>{t("skills.title")}</SkillsTitle>
        <SkillsDesc>{t("skills.desc")}</SkillsDesc>
        <SkillsItem />
      </motion.div>
    </>
  )
}
