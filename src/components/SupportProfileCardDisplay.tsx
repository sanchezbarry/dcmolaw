import { HoverEffect } from "./ui/card-hover-effect-support";
// import Image from 'next/image'

export function SupportProfileCardDisplay() {
  return ( 
    <div className="max-w-5xl mx-auto px-8 dark:bg-neutral-900">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [

  {
    image: "/Corrine_headshot.jpeg",
    title: "Corrine Soh",
    description:
      "Paralegal to Ms Mary Ong",
    link: "/profiles/supportstaff/corrinesoh",
  },
  {
    image: "/Jess_headshot.jpg",
    title: "Jess Ho",
    description:
      "Paralegal to Ms Dorothy Chai",
    link: "/profiles/supportstaff/jessho",
  },


];
