
import Description from '../Description'
import SkillsItem from './SkillsItem'
import Title from '../Title'
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';


export default function Index() {
  const { t } = useTranslation('common');

  return (
    <>
      <motion.div className='w-full mx-auto lg:px-0 md:px-8 px-4 my-10'
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
