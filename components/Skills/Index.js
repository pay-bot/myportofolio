
import SkillsDesc from './SkillsDesc'
import SkillsItem from './SkillsItem'
import SkillsTitle from './SkillsTitle'

export default function Index() {
  return (
    <>
      <div className='lg:w-9/12 w-full mb-4 mx-auto mt-28 px-4'>
        <SkillsTitle>Kemampuan</SkillsTitle>
        <SkillsDesc>Kemapuan yang saya miliki</SkillsDesc>
        <SkillsItem />
      </div>
    </>
  )
}
