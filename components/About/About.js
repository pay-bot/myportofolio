import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import AboutCard from './AboutCard';
import Description from '../Description';
import Title from '../Title';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <>
      <motion.div
        className="section-base "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>{t('about.title')}</Title>
        <Description>{t('about.desc')}</Description>

        <AboutCard />
      </motion.div>
    </>
  );
}
