export default function CarouselCard({ image, judul }) {
  return (
    <>
      <div className='shadow-md p-6 lg:m-2 m-0 flex flex-col items-center h-[170px] justify-center  dark:bg-gradient-to-t dark:from-blue-600 dark:via-gray-700 dark:to-gray-900  bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600 '>
        <img className='w-24 h-full mb-5' src={image} alt="JavaScript" />
        <div className='flex flex-col items-center'>
          <span className='block text-xl capitalize font-semibold dark:text-gray-200 bottom-0'>{judul}</span>
        </div>
      </div>
    </>
  )
}