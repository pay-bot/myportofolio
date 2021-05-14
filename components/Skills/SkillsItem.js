import SkillsCard from "./SkillsCard"

export default function SkillsItem() {
  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <SkillsCard
          image="/images/js.png"
          alt="Javascript"
          title="Javascript"
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
          image="/images/js.png"
          alt="Javascript"
          title="Javascript"
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
          image="/images/js.png"
          alt="Javascript"
          title="Javascript"
          desc="1 Year "
          descspan="experience"
        />

      </div>
    </>
  )
}
