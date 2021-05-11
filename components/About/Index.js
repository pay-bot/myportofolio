import AboutCard from "./AboutCard"
import AboutDesc from "./AboutDesc"
import AboutTitle from "./AboutTitle"

export default function () {
  return (
    <>
      <div className="mt-28 px-8">
        <AboutTitle>Tentang</AboutTitle>
        <AboutDesc>Profil singkat saya</AboutDesc>
        <div className="lg:w-9/12 w-11/12 bg-white dark:bg-gray-600 dark:text-gray-300 lg:h-[350px] h-full mx-auto shadow-xl flex lg:flex-row flex-col lg:mb-0 mb-5">
          <AboutCard />
        </div>
      </div>
    </>
  )
}