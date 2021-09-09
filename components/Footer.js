export default function Footer({ children }) {
  return (
    <div className="w-full bg-[#F4F4FB] dark:bg-[#2E3D60] mx-auto">
      <div className=" border-t-2 border-gray-300">
        <p className="text-center text-sm text-gray-900 dark:text-white font-bold lg:p-5 p-3">
          {children}
        </p>
      </div>
    </div>
  )
}