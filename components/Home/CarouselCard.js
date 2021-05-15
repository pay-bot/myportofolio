export default function CarouselCard({ image, judul }) {
  return (
    <>
      <div className='shadow-md p-6 flex flex-col items-center h-[170px] m-3 justify-center'>
        <img className='w-24 h-full' src={image} alt="JavaScript" />
        <div className='flex flex-col items-center'>
          <span className='block text-lg bottom-0'>{judul}</span>
        </div>
      </div>
    </>
  )
}