import Link from "next/link"
import { useRouter } from 'next/router'

export default function CategoryItem(props) {
  const { asPath } = useRouter()
  return (
    <>

        <li className="flex justify-center w-full border "><Link href={props.href}><a className={` transition-colors duration-200 text-gray-500 font-semibold lg:hover:bg-gray-200 text-center w-full px-auto " ${props.className ? props.className : ''} ${asPath === props.href || asPath === props.as ? 'text-gray-900 dark:text-white w-full text-center bg-blue-400' : ''}`}>
          {props.children}</a></Link></li>

    </>
  )
}