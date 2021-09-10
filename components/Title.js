export default function Title({ children }) {
  return (
    <>
      <p className="py-3 capitalize font-semibold text-gray-700 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-white dark:via-gray-500 dark:to-white text-5xl">{children}</p>
    </>
  )
}