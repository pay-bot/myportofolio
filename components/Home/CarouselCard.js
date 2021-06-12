export default function CarouselCard({ image, judul }) {
  return (
    <>
      <div className='shadow-md p-6 lg:m-2 m-0 flex flex-col items-center h-[170px] justify-center dark:bg-gray-700'>
        <img className='w-24 h-full mb-5' src={image} alt="JavaScript" />
        <div className='flex flex-col items-center'>
          <span className='block text-xl capitalize font-semibold dark:text-gray-200 bottom-0'>{judul}</span>
        </div>
      </div>
    </>
  )
}