import SkillsCard from "./SkillsCard"

export default function SkillsItem() {
  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <SkillsCard
          image="/images/html.svg"
          alt="html"
          title="HTML"
        />
        <SkillsCard
          image="/images/css.png"
          alt="css"
          title="CSS"
        />
        <SkillsCard
          image="/images/js.png"
          alt="Javascript"
          title="Javascript"
        />
        <SkillsCard
          image="/images/nodejs.svg"
          alt="node"
          title="NodeJS"
        />
        <SkillsCard
          image="/images/react.png"
          alt="react"
          title="ReactJS"
        />
        <SkillsCard
          image="/images/next.svg"
          alt="next"
          title="NextJS"
        />
        <SkillsCard
          image="/images/tailwind.svg"
          alt="tailwind"
          title="Tailwind"
        />

      </div>
    </>
  )
}
