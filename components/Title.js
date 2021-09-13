export default function Title({ children }) {
  return (
    <>
      <p data-aos="fade-up" className="py-3 capitalize font-semibold text-gray-700 text-transparent bg-clip-text bg-gradient-to-b from-blue-200 via-indigo-900 to-blue-200 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-blue-100 dark:via-indigo-500 dark:to-blue-2100 text-5xl">{children}</p>
    </>
  )
}