import Navitems from "./Navitems";
import classnames from "classnames";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6"
  }
  const pickedDir = dirs[dir];
  return (
    <div className="lg:flex items-center z-30">
      <ul className={classnames("flex my-6 capitalize lg:mx-auto mr-0", pickedDir)}>
        <Navitems scheme={scheme} href="/">home</Navitems>
        <Navitems scheme={scheme} href="/about">about</Navitems>
        <Navitems scheme={scheme} href="/skills">skills</Navitems>
        <Navitems scheme={scheme} href="/project">project</Navitems>
        <Navitems scheme={scheme} href="/contact">contact</Navitems>
      </ul >

    </div>
  )
}