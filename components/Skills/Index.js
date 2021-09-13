
import Description from '../Description'
import SkillsItem from './SkillsItem'
import Title from '../Title'
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';


export default function Index() {
  const { t } = useTranslation('common');

  return (
    <>
      <motion.div className='w-full mx-auto my-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>

        <Title>{t("skills.title")}</Title>
        <Description>{t("skills.desc")}</Description>
        <SkillsItem />
      </motion.div>
    </>
  )
}
