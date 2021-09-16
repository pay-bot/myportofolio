
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';



export default function Citation() {
  const { t } = useTranslation('common');

  const textVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const [citation, setCitation] = useState(true);
  useEffect(() => {
    const ids = [
      setTimeout(() => setCitation(false), 4500),
    ];
    return () => ids.forEach((id) => clearTimeout(id));
  }, [setCitation]);
  return (
    <>
      <motion.div
        className="absolute flex items-center justify-center w-screen h-screen "
        variants={{
          initial: {
            opacity: 1,
            height: "100%",
          },
          invisible: {
            opacity: 0,
            height: 0,
          },
        }}
        transition={{
          duration: 0.6,
        }}
        initial="initial"
        animate={citation ? "initial" : "invisible"}
      >
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 3.0,
            duration: 1.2,
          }}
        >
        </motion.div>
        <div className="flex flex-col px-4 mx-auto max-w-screen-md">
          <motion.p
            className="mt-4 mb-2 uppercase text-xl text-center font-medium leading-none md:text-2xl dark:text-white text-black-900 md:my-0"
            variants={textVariants}
            initial="initial"
            animate="visible"
            transition={{
              delay: 1.0,
              duration: 1.2,
            }}
          >
            {t("citation.p")}
          </motion.p>
          <motion.p
            className="text-base text-right   dark:text-white text-black-700 mt-3"
            initial="initial"
            animate="visible"
            variants={textVariants}
            transition={{
              delay: 2.0,
              duration: 1.2,
            }}
          >
            Imam Syafi'i
          </motion.p>
        </div>
      </motion.div>
    </>
  )
}
