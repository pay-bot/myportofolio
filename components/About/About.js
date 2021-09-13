import AboutCard from "./AboutCard"
import Description from "../Description"
import Title from "../Title"
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';


export default function About() {
  const { t } = useTranslation('common');

  return (
    <>
      <motion.div className="w-full   "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <Title>{t("about.title")}</Title>
        <Description>{t("about.desc")}</Description>
        <div className=" dark:text-gray-100 shadow-2xl lg:h-[350px] h-full mx-auto flex lg:flex-row flex-col lg:mb-0 p-3 mb-5 ">
          <AboutCard />
        </div>
      </motion.div>
    </>
  )
}