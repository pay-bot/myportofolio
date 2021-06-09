import Button from "./Button"

export default function Greeting() {
  return (
    <>
      <div className="lg:text-left text-center"
        initial={{ x: 250 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}>
        <div className="text-4xl sm:text-5xl md:text-6xl font-black  dark:text-gray-300">Halo...</div>
        <div className="text-4xl sm:text-5xl md:text-6xl font-black  dark:text-gray-300">Saya <span className="text-blue-500">Fahri</span>
        </div>

        <div className="mt-5 mb-5 sm:text-xl font-semibold  text-gray-400">"Di saat VScode kubuka di situlah aplikasimu akan jadi nyata"</div>
        <Button />


      </div>
    </>
  )
}