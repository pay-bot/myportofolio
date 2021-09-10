export default function Footer({ children }) {
  return (
    <div className="w-full bg-white dark:bg-[#1A2744] mx-auto">
      <div className=" border-t-2 dark:border-gray-700">
        <p className="text-center text-sm text-gray-900 dark:text-white font-bold lg:p-5 p-3">
          {children}
        </p>
      </div>
    </div>
  )
}