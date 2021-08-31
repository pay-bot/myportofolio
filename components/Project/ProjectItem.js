
import ProjectCard from "./ProjectCard"
import { useTranslation } from 'next-i18next';
import React, { useMemo } from "react";


export default function ProjectItem() {
  const { t } = useTranslation('common');

  const projects = useMemo(
    () => [
      {
        image: "/MyWEB.png",
        judul: t("greeting.p1"),
        deskripsi: "aplikasi Portofolio",
        deskripsiCard: "Web app selects and lets you solve algorithmic problems of your level by looking at your Codeforces rating.",
        techImage: ["/react-2.svg", "/nextlogo.svg", "/images/tailwind.svg"],
        href: "https://myportofolio-vert.vercel.app/"
      },
    ],
    [t]
  );

  return (
    <>
      {projects.map((project, i) => (
        <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
      ))}
    </>
  )
}
