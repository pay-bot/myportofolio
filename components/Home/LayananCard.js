export default function LayananCard({ image, item, description }) {
  return (
    <>
      <div className="p-5 dark:bg-gray-600 lg:w-6/12 w-full mx-auto mt-5">
        <img src={image} alt="" className="w-24 h-20 border-4 border-black rounded-xl p-1 mb-3" />
        <p className="text-xl ">{item}</p>
        <p className="text-md text-justify">{description}</p>
      </div>
    </>
  )
}