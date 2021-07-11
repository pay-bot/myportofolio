import AboutCard from "./AboutCard"
import AboutDesc from "./AboutDesc"
import AboutTitle from "./AboutTitle"

export default function Index() {
  return (
    <>
      <div className="mt-28 md:px-8 px-0">
        <AboutTitle>Tentang</AboutTitle>
        <AboutDesc>Profil singkat saya</AboutDesc>
        <div className="lg:w-9/12 w-11/12 dark:text-gray-300 shadow-2xl dark:bg-gradient-to-t dark:from-blue-600 dark:via-gray-700 dark:to-gray-900 border-gray-600 dark:border-gray-600 bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600 lg:h-[350px] h-full mx-auto flex lg:flex-row flex-col lg:mb-0 p-3 mb-5">
          <AboutCard />
        </div>
      </div>
    </>
  )
}