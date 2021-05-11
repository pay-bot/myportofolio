import { RESUME } from "./resume"

export default function Greeting() {
  return (
    <div className="lg:text-left text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-black  dark:text-gray-300">Halo...</div>
      <div className="text-4xl sm:text-5xl md:text-6xl font-black  dark:text-gray-300">Saya <span className="text-blue-500">Fahri</span>
      </div>

      <div className="mt-5 mb-5 sm:text-xl font-semibold  text-gray-400">"Divv saat VScode kubuka di situlah aplikasimu akan jadi nyata"</div>


      <div className="flex lg:justify-start justify-center">

        <button className="bg-blue-500 px-4 py-2 mr-3 text-lg font-semibold tracking-wider text-white rounded hover:bg-blue-600">Contact</button>
        <button className="bg-blue-100 px-4 py-2 text-lg font-semibold tracking-wider text-blue-600 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"  ><a href={RESUME}>Download CV</a></button>
      </div>
    </div>
  )
}