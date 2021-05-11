import CarouselProfile from "./CarouselProfile"
import Greeting from "./Greeting"
import ProfileCard from "./ProfileCard";
import SkillsTitle from "./SkillsTitle";

export default function Index() {
  return (
    <>
      <div className="lg:w-9/12 w-full mx-auto lg:py-10 p-4 mt-28 ">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-6/12 w-full ">
            <Greeting />
          </div>
          <div className="md:w-6/12 w-full flex md:flex-row flex-col shadow-xl rounded-xl my-5 items-center dark:bg-gray-600">
            <ProfileCard />
          </div>
        </div>
        <div className="flex flex-col ">
          <SkillsTitle>Skills</SkillsTitle>
          <CarouselProfile />
        </div>
      </div>
    </>
  )
}