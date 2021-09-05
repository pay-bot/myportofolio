import Link from "next/link"
import { useRouter } from 'next/router'

export default function Navitems(props) {
  const { asPath } = useRouter()
  return (
    <>

      <ul className="">
        <li className=""><Link href={props.href}><a className={`transition-colors duration-200 text-white0 dark:text-white font-semibold lg:hover:border-b-2 hover:border-blue-400 active:border-black" ${props.className ? props.className : ''} ${asPath === props.href || asPath === props.as ? 'text-gray-900 dark:text-white border-b-2 border-blue-400' : ''}`}>
          {props.children}</a></Link></li>
      </ul>

    </>
  )
}