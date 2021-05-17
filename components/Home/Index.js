import CarouselItem from "./CarouselItem"
import Greeting from "./Greeting"
import ProfileCard from "./ProfileCard";
import SkillsTitle from "./SkillsTitle";
import Layanan from "./Layanan";
import SertifikatItem from "./SertifikatItem";

export default function Index() {
  return (
    <>
      <div className="lg:w-9/12 w-11/12 mx-auto px-4">
        <div className="flex md:flex-row flex-col items-center justify-center h-screen">
          <div className="md:w-6/12 w-full mx-auto mb-5">
            <Greeting />
          </div>
          <div className="md:w-6/12 w-full flex md:flex-row flex-col shadow-xl rounded-xl dark:bg-gray-600 ">
            <ProfileCard />
          </div>
        </div>
      </div>
      <div className="mb-10 p-5 bg-gray-200 dark:bg-gray-700">
        <Layanan />
      </div>
      <div className="flex flex-col w-9/12 mx-auto p-5">
        <SkillsTitle>Keterampilan saya</SkillsTitle>
        <CarouselItem />
      </div>
      <div className="lg:w-9/12 w-11/12 mx-auto mb-10 p-5">
        <p className="mt-0 mb-5 font-semibbold md:text-4xl text-3xl dark:text-gray-200 text-center">Sertifikat</p>
        <SertifikatItem />
      </div>

    </>
  )
}