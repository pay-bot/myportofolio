import SkillsCard from "./SkillsCard"
import React, { useMemo } from "react";


export default function SkillsItem() {
  const skills = useMemo (
    () => [
      {
        image: "/images/html.svg",
        alt: "html",
        title: "HTML",
      },
      {
        image:"/images/css.png",
          alt:"css",
          title:"CSS"
      },
      {
        image:"/images/js.png",
          alt:"Javascript",
          title:"Javascript"
      },
      {
        image:"/images/nodejs.svg",
          alt:"node",
          title:"NodeJS"
      },
      {
        image:"/images/react.png",
          alt:"react",
          title:"ReactJS"
      },
      {
        image:"/images/next.svg",
        alt:"next",
        title:"NextJS"
      },
      {
        image:"/images/tailwind.svg",
          alt:"tailwind",
          title:"Tailwind"
      }
    ])
  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
      {skills.map((skill) => (
        <SkillsCard key={skill} {...skill} />
      ))}
      </div>
    </>
  )
}
