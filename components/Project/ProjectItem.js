
import ProjectCardRight from "./ProjectCardRight"
import ProjectCard from "./ProjectCard"
import { useTranslation } from 'next-i18next';
import React, { useMemo } from "react";


export default function ProjectItem() {
  const { t } = useTranslation('common');

  const projects = useMemo(
    () => [
      {
        image:"myporto.png",
        judul:t("greeting.p1"),
        deskripsi:"aplikasi Portofolio",
        deskripsiCard:"Web app selects and lets you solve algorithmic problems of your level by looking at your Codeforces rating.",
        techImage:["react-2.svg" , "/images/tailwind.svg" ],
        href:"https://myportofolio-vert.vercel.app/"
      },
      {
        image:"myporto.png",
        judul:t("greeting.p1"),
        deskripsi:"aplikasi Portofolio",
        deskripsiCard:"Web app selects and lets you solve algorithmic problems of your level by looking at your Codeforces rating.",
        techImage:["github.svg","github.svg"],
        href:"https://myportofolio-vert.vercel.app/"
      }
    ],
    [t]
  );

  return (
    <>

      {/* <ProjectCard
        image="myporto.png"
        judul={t("greeting.p1")}
        deskripsi="aplikasi Portofolio"
        deskripsiCard="Web app selects and lets you solve algorithmic problems of your level by looking at your Codeforces rating."
        techImages="clean-code.svg"
        href="https://myportofolio-vert.vercel.app/"
      />
      <ProjectCardRight
        image="dipoles.png"
        judul="dipoles"
        deskripsi="aplikasi jasa poles lantai"
        deskripsiCard="Web app selects and lets you solve algorithmic problems of your level by looking at your Codeforces rating."
        tech="NextJS  Tailwind"
        href="https://dipoles.vercel.app/"
      /> */}

      {projects.map((project, i) => (
        <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
      ))}
    </>
  )
}
