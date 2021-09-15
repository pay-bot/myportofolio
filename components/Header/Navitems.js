import Link from "next/link"
import { useRouter } from 'next/router'

export default function Navitems(props) {
  const { asPath } = useRouter()
  return (
    <>
      <ul className="">
        <li className=""><Link href={props.href}><a className={`text-4xl md:text-lg transition-colors duration-500  dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400  " ${props.className ? props.className : ''} ${asPath === props.href || asPath === props.as ? 'text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400 border-blue-400 dark:border-blue-700 border-b-2 transition-colors duration-200 pb-5' : ''}`}>
          {props.children}</a></Link></li>
      </ul>

    </>
  )
}