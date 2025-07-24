import { HoverEffect } from "./ui/card-hover-effect-associates";
// import Image from 'next/image'

export function AssociatesProfileCardDisplay() {
  return ( 
    <div className="max-w-5xl mx-auto px-8 dark:bg-neutral-900">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  // {
  //   image: "/rashpal-singh-sidhu.jpg",
  //   title: "Rashpal Singh Sidhu",
  //   description:
  //     "Rashpal Singh Sidhu is an Associate at DCMO Law Practice LLC.",
  //   link: "/profiles/associates/rashpal",
  // },
  // {
  //   image: "/heng-min-zhi.jpg",
  //   title: "Min Zhi",
  //   description:
  //     "Min Zhi joined the firm as a Legal Associate in 2021. Her practice focus is on Family Law and Estate Planning.",
  //   link: "/profiles/associates/minzhi",
  // },
  {
    image: "/munloon.jpg",
    title: "Mun Loon",
    description:
      "Mun Loon is a Legal Associate at DCMO Law Practice LLC and a trained and qualified social worker, counsellor and mediator.",
    link: "/profiles/associates/munloon",
  },
  {
    image: "/SeanWongHeadshot.jpeg",
    title: "Sean Wong",
    description:
      "Sean graduated with an LLB (Hons) from the University of Leeds in the United Kingdom and was subsequently called to the Singapore Bar in 2025.",
    link: "/profiles/associates/seanwong",
  },


];
