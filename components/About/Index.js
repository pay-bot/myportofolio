import AboutCard from "./AboutCard"
import AboutDesc from "./AboutDesc"
import AboutTitle from "./AboutTitle"

export default function Index() {
  return (
    <>
      <div className="mt-28 px-8">
        <AboutTitle>Tentang</AboutTitle>
        <AboutDesc>Profil singkat saya</AboutDesc>
        <div className="lg:w-9/12 w-11/12 dark:text-gray-300 dark:bg-gray-700 lg:h-[350px] h-full mx-auto flex lg:flex-row flex-col lg:mb-0 p-3 mb-5">
          <AboutCard />
        </div>
      </div>
    </>
  )
}