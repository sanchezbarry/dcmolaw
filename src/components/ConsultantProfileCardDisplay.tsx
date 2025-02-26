import { HoverEffect } from "./ui/card-hover-effect-consultant";
// import Image from 'next/image'

export function ConsultantProfileCardDisplay() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image: "/ellen-lee.png",
    title: "Ellen Lee",
    description:
      "Ellen, a Justice of the Peace, has practised as an Advocate and Solicitor of the Supreme Court of Singapore after she was called to the Bar on 14 January 1981.",
    link: "/profiles/consultants/ellenlee",
  },


];
