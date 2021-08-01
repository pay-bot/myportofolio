import Link from "next/link"

export default function Logo({ children, href }) {
  return (
    <>
      <h3 className="lg:mt-3 mt-6 ml-5 text-blue-600 text-2xl animate-pulse font-semibold tracking-widest uppercase "><Link href={href}><a>{children}</a></Link></h3>
    </>
  )
}