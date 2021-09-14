import AboutCard from "./AboutCard"
import Description from "../Description"
import Title from "../Title"
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';


export default function About() {
  const { t } = useTranslation('common');

  return (
    <>
      <motion.div className="w-full my-5  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <Title>{t("about.title")}</Title>
        <Description>{t("about.desc")}</Description>
        
          <AboutCard />
      </motion.div>
    </>
  )
}