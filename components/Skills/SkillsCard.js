export default function SkillsCard({ image, alt, title}) {
  return (
    <>
      <div className='transform transition duration-500 ease-in-out hover:scale-110 dark:bg-gradient-to-t dark:from-blue-600 dark:via-gray-700 dark:to-gray-900 border-gray-600 dark:border-gray-600 bg-gradient-to-t from-gray-100 via-gray-200 to-[#EAECF4] shadow-md p-6 flex flex-col items-center m-2 justify-center'>
        <div className='h-full'>
          <img className='w-24' src={image} alt={alt} />
        </div>
        <div className='flex flex-col items-center'>
          <span className='block text-xl mb-2'>{title}</span>
        </div>
      </div>
    </>
  )
}