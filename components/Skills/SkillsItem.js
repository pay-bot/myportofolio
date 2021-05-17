import SkillsCard from "./SkillsCard"

export default function SkillsItem() {
  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <SkillsCard
          image="/images/html.svg"
          alt="html"
          title="HTML"
          desc="1 Year "
          descspan="experience"
        />
        <SkillsCard
          image="/images/css.png"
          alt="css"
          title="CSS"
          desc="1 Year "
          descspan="experience"
        />
        <SkillsCard
          image="/images/js.png"
          alt="Javascript"
          title="Javascript"
          desc="1 Year "
          descspan="experience"
        />
        <SkillsCard
          image="/images/nodejs.svg"
          alt="node"
          title="NodeJS"
          desc="1 Year "
          descspan="experience"
        />
        <SkillsCard
          image="/images/react.png"
          alt="react"
          title="ReactJS"
          desc="1 Year "
          descspan="experience"
        />
        <SkillsCard
          image="/images/next.svg"
          alt="next"
          title="NextJS"
          desc="1 Year "
          descspan="experience"
        />
        <SkillsCard
          image="/images/tailwind.svg"
          alt="tailwind"
          title="Tailwind"
          desc="1 Year "
          descspan="experience"
        />

      </div>
    </>
  )
}
