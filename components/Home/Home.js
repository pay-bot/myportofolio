import React, { useEffect, useState } from "react";
import Hero from "./Hero"
import Layanan from "./Layanan";
import Citation from "./Citation";
import '@tsamantanis/react-glassmorphism/dist/index.css'
import Contact from "./Contact/Contact"
import Navbar from "../Header/Navbar";
import Footer from "../../components/Footer"
import { motion } from "framer-motion"

export default function Home() {
  const [home, setHome] = useState(false);
  useEffect(() => {
    const ids = [
      setTimeout(() => setHome([
        <motion.div className="" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          <Navbar />
        </motion.div>,
        <Hero />,
        <Layanan />,
        <Contact />,
        <Footer />,
      ]), 4800),
    ];
    return () => ids.forEach((id) => clearTimeout(id));
  }, [setHome]);

  return (
    <>
      <Citation />
      {home}
    </>
  )
}