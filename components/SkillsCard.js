export default function SkillsCard({ image, title, desc, descspan }) {
  return (
    <>
      <div className='bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center'>
        <div className='mb-3'>
          <img className='w-24' src={image} alt="JavaScript" />
        </div>
        <div className='flex flex-col items-center'>
          <span className='block text-xl mb-2'>{title}</span>
          <span className='text-center'><span className='font-medium'>{desc}</span>{descspan}</span>
        </div>
      </div>
    </>
  )
}