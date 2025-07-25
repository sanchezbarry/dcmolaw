import { HoverEffect } from "./ui/card-hover-effect";
// import Image from 'next/image'

export function ConsultantProfileCardDisplay() {
  return (
    <div className="max-w-5xl mx-auto lg:px-8 dark:bg-neutral-900">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image: "/ellen-lee.png",
    title: "Ellen Lee",
    description:
      "Ellen, a Justice of the Peace, has practised as an Advocate and Solicitor of the Supreme Court of Singapore.",
    link: "/profiles/consultants/ellenlee",
  },

    {
    image: "/pradeepheadshot.jpg",
    title: "Pradeep Gurbani",
    description:
      "Pradeep Gurbani Esq. is a Senior Consultant at DCMO Law Practice LLP .",
    link: "/profiles/consultants/pradeepgurbani",
  },


];
