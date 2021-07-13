import Hero from "./Hero"
import Layanan from "./Layanan";
import Citation from "./Citation";
import '@tsamantanis/react-glassmorphism/dist/index.css'
import SkillsCert from "./SkillsCert";

export default function Home() {



  return (
    <>
      <Citation />
      <Hero />
      <Layanan />
      <SkillsCert />
    </>
  )
}