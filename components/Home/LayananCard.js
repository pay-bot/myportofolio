export default function LayananCard({ image, item, description }) {
  return (
    <>
      <div className="py-5 lg:w-6/12 w-full mx-auto">
        <img src={image} alt="" className="w-24 h-20 float-left  mx-3 dark:bg-opacity-10 dark:bg-gradient-to-r dark:from-blue-600 dark:via-blue-700 dark:to-blue-900 border-gray-600 dark:border-gray-600 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-xl p-1 mb-3" />
        <p className="text-2xl dark:text-gray-300 font-semibold">{item}</p>
        <p className="text-md text-justify dark:text-gray-400 ">{description}</p>
      </div>
    </>
  )
}