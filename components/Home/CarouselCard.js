export default function CarouselCard({ image, judul }) {
  return (
    <>
      <div className='bg-white dark:bg-gray-600 shadow-md p-6 box-border flex flex-col items-center h-[150px] m-3 justify-center'>
        <img className='w-24 h-[100px] mb-5' src={image} alt="JavaScript" />
        <div className='flex flex-col items-center'>
          <span className='block text-lg'>{judul}</span>
        </div>
      </div>
    </>
  )
}