import React from "react";
import userData from "../constants/data";

export default function Experience() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto h-48">
        <h1 className=" text-5xl md:text-9xl font-bold py-5 text-center md:text-left
        
        
        pb-3 text-5xl font-semibold text-transparent capitalize bg-clip-text bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-blue-400 dark:via-blue-600 dark:to-blue-400
        z-50
        
        ">
          Experience
        </h1>
      </div>
      <div className="w-full items-center flex mx-auto  py-16">
        <div className="grid grid-cols-1 flex lg:flex-row flex-col-reverse dark:bg-gradient-to-t dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 border-gray-600 dark:border-gray-600 bg-white dark:text-gray-100 mx-auto lg:mb-0 mb-5  px-4 max-w-xl mx-auto py-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl  z-10 mx-4">
      <h1 className="pb-3 text-5xl font-semibold  capitalize md:text-3xl text-2xl capitalize hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};