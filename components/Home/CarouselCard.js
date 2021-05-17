export default function CarouselCard({ image, judul }) {
  return (
    <>
      <div className='shadow-md p-6 m-2 flex flex-col items-center h-[170px] justify-center dark:bg-gray-700'>
        <img className='w-24 h-full' src={image} alt="JavaScript" />
        <div className='flex flex-col items-center'>
          <span className='block text-lg bottom-0'>{judul}</span>
        </div>
      </div>
    </>
  )
}