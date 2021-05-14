import Navitems from "./Navitems";
import classnames from "classnames";

export default function Nav({ dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6"
  }
  const pickedDir = dirs[dir];
  return (
    <div className="lg:w-9/12 w-11/12 lg:flex items-center z-30 dark:bg-gray-800">
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