import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Layanan from './Layanan';
import Citation from './Citation';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import Contact from './Contact/Contact';
import Navbar from '../Header/Navbar';
import Footer from '../Footer';
import ModalManger from '../../utils/ModalManger'

export default function Home() {
  const [home, setHome] = useState(false);
  useEffect(() => {
    const ids = [
      setTimeout(
        () =>
          setHome([
            <motion.div
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <ModalManger />
              <Navbar />
            </motion.div>,
            <Hero />,
            <Layanan />,
            <Contact />,
            <Footer />
          ]),
        4700
      )
    ];
    return () => ids.forEach(id => clearTimeout(id));
  }, [setHome]);

  return (
    <>
      <Citation />
      {home}
    </>
  );
}
