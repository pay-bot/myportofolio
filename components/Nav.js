import Navitems from "./Navitems";
import classnames from "classnames";

export default function Nav({ dir }) {
  const dirs = {
    horizontal: "justify-around space-x-10",
    vertical: "flex-col space-y-6"
  }
  const pickedDir = dirs[dir];
  return (
    <div className="lg:flex items-center z-30 dark:bg-gray-900">
      <ul className={classnames("flex my-6 capitalize lg:mx-auto mr-0", pickedDir)}>
        <Navitems href="/">home</Navitems>
        <Navitems href="/about">about</Navitems>
        <Navitems href="/skills">skills</Navitems>
        <Navitems href="/project">project</Navitems>
        <Navitems href="/contact">contact</Navitems>
      </ul >

    </div>
  )
}