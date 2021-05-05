export default function Navitems({ href, children }) {
  return (
    <>

      <ul className="">
        <li className="text-gray-700 font-semibold lg:hover:border-b-2 hover:border-blue-400 active:border-black"><a href={href} className="">{children}</a></li>
      </ul>

    </>
  )
}