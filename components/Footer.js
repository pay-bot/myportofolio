export default function Footer({ children }) {
  return (
    <div className="w-full dark:bg-gray-800 mx-auto">
      <div className=" border-t-2 border-gray-300">
        <p className="text-center text-sm text-blue-700 font-bold p-7">
          {children}
        </p>
      </div>
    </div>
  )
}