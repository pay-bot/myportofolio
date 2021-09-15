import Navitems from "./Navitems";
import classnames from "classnames";


export default function Nav({ dir }) {
  const dirs = {
    horizontal: "justify-center z-50 md:flex hidden lg:space-x-10 md:space-x-8",
    vertical: "flex-col z-50 text-center h-screen items-center space-y-16 justify-center text-3xl"
  }
  const pickedDir = dirs[dir];

  

  return (
    <div className="md:flex items-center z-50 ">
      <ul className={classnames("flex my-4 capitalize md:mx-auto ", pickedDir)}>
        <Navitems href="/">HOME</Navitems>
        <Navitems href="/portofolio">PORTOFOLIO</Navitems>
        <Navitems href="/blog">BLOG</Navitems>
      </ul >

    </div>
  )
}