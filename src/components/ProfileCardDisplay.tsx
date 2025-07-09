import { HoverEffect } from "./ui/card-hover-effect";
// import Image from 'next/image'

export function ProfileCardDisplay() {
  return (
    <div className="max-w-5xl mx-auto px-8 dark:bg-neutral-900">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image: "/dorothychai.png",
    title: "Dorothy Chai",
    description:
      "Dorothy Chai is the Managing Partner of the firm.",
    link: "/profiles/partners/dorothychai",
  },
  {
    image: "/mary-ong.png",
    title: "Mary Ong",
    description:
      "Mary Ong is one of the founding Partners of the Firm.",
    link: "/profiles/partners/maryong",
  },

];
