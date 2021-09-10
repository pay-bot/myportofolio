import Link from "next/link"
import { useRouter } from 'next/router'

export default function Navitems(props) {
  const { asPath } = useRouter()
  return (
    <>

      <ul className="">
        <li className=""><Link href={props.href}><a className={`text-4xl md:text-base transition-colors duration-500  dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400  " ${props.className ? props.className : ''} ${asPath === props.href || asPath === props.as ? 'text-blue-600 dark:text-blue-400 border-b-2 dark:border-blue-400 border-blue-600 transition-colors duration-200 pb-5' : ''}`}>
          {props.children}</a></Link></li>
      </ul>

    </>
  )
}