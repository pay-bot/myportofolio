export default function Title({ children }) {
  return (
    <>
      <p data-aos="fade-up" className="py-3 capitalize font-semibold text-gray-700 text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400 text-5xl">{children}</p>
    </>
  )
}