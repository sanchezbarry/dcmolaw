'use client'

import React from "react";
import { cn } from "@/utils/cn"
import Image from "next/image";
// import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Family Law",
      description:
        "Matrimonial Law is our firm’s specialty and key area of practice. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
      button: <Link href="/familylaw"><Button>Read More</Button></Link>
    },
    {
      title: "Other Areas",
      description:
        "Our team of lawyers are also experienced in other areas of personal law beyond matrimonial law. We also offer highly competitive rates for the handling of your matter entrusted to us as we seek to be a one-stop centre for all your personal legal needs.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
      button: <Link href="/otherservices"><Button>Other Services</Button></Link>
    },
    {
      title: "Who we are?",
      description:
        "Our Law Practice was founded upon the shared vision of our directors, Ms. Dorothy Chai and Ms. Mary Ong, to provide effective and practical legal solutions for our clients whilst training the next generation of Lawyers to do the same. Before merging, Ms Dorothy Chai practiced under the award-winning M/s Dorothy Chai Law Practice for 4 years and Ms Mary Ong practiced under M/s Mary Ong & Company for 10 years.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-6 lg:border-r  dark:border-neutral-800",
      button: <Link href="/about-us"><Button>About Us</Button></Link>,
        titleClass: "text-left mx-0",
      descClass: "text-left mx-0 w-full col-span-6",
    },
    // {
    //   title: "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.",
    //   description:
    //     "Proverbs 9:10",
    //   skeleton: <SkeletonFour />,
    //   className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    // },
  ];
  return (
    <div className="relative z-20 pb-8 lg:pb-6 max-w-7xl mx-auto pt-1">
      {/* <div className="px-8">
        <Image src="/dcmowhite.png" alt="header" width={200} height={200} className="m-auto object-cover object-center rounded-md" />
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        Every client matters.
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        We offer
        a comprehensive range of legal services that focus primarily on family law, Mental Capacity Law, mediation, personal law and other forms of dispute resolution.
        </p>
        <div className="mx-auto text-center">
        <a href="#anchor_form" className={buttonVariants({ variant: "default" })}>Consultation</a>
        </div>

      </div> */}

<div
  className="relative w-full left-1/2 right-1/2 -mx-[50vw] px-8 pt-0 min-h-[500px]"
  style={{
    position: "relative",
    width: "100vw",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    backgroundImage: "url('/hero-bg2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: 0, // ensures it starts at the very top
  }}
>
  <div className="absolute inset-0 bg-black/15 dark:bg-black/20 pointer-events-none" />
  <div className="relative z-10 pt-16 pb-16"> {/* pt-16 for spacing below nav, pb-16 for more space below button */}
    <Image src="/dcmowhite.png" alt="header" width={200} height={200} className="m-auto object-cover object-center rounded-md" />
    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
      Every Client Matters.
    </h4>
    <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-center font-normal dark:text-neutral-300 text-neutral-100">
     We provide expertise for a better tomorrow.
    </p>
    <div className="mx-auto text-center">
      <Link href="#anchor_form"><Button>Contact Us</Button></Link>
      {/* <a href="#anchor_form" className={buttonVariants({ variant: "default" })}>Contact Us</a> */}
    </div>
  </div>
</div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 lg:auto-rows-auto mt-12 xl:border rounded-2x1 md:rounded-2xl dark:border-neutral-800 shadow-md">
{features.map((feature) => (
  <FeatureCard key={feature.title} className={feature.className}>
    <FeatureTitle className={feature.titleClass}>{feature.title}</FeatureTitle>
    <FeatureDescription className={feature.descClass}>{feature.description}</FeatureDescription>
    <FeatureButton className="text-left mx-0">{feature.button}</FeatureButton>
    <div className="h-full w-full">{feature.skeleton}</div>
  </FeatureCard>
))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <p className={cn("max-w-5xl tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug", className)}>
    {children}
  </p>
);

const FeatureButton = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <p className={cn("max-w-5xl tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug", className)}>
    {children}
  </p>
);

// const FeatureDescription = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
//   <p className={cn("text-sm md:text-base max-w-4xl font-light dark:text-neutral-300 my-2", className)}>
//     {children}
//   </p>
// );

const FeatureDescription = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <p className={cn("text-sm md:text-base font-light dark:text-neutral-300 my-2", className)}>
    {children}
  </p>
);
// const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
//       {children}
//     </p>
//   );
// };

// const FeatureButton = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
//       {children}
//     </p>
//   );
// };

// const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p
//       className={cn(
//         "text-sm md:text-base max-w-4xl text-left mx-auto",
//         "text-neutral-500 text-center font-normal dark:text-neutral-300",
//         "text-left max-w-lg mx-0 md:text-sm my-2"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-1/2">
      
      <div className="w-full mx-auto bg-white dark:bg-neutral-900 group h-full">

        <div className="flex flex-1 w-full flex-col space-y-2  ">

          <Image
            src="/familylaw.jpg"
            alt="header"
            width={2000}
            height={2000}
            className="w-full h-full mx-auto object-cover object-left-top rounded-sm"
          />
        </div> 
      </div>
 
      {/* <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" /> */}
      {/* <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" /> */}
    </div>
  );
};

export const SkeletonThree = () => {
  return (

      <div className="w-full mx-auto bg-transparent dark:bg-transparent group">
        <div className="flex flex-1 w-full h-1/2 flex-col space-y-2 relative">

          <Image
            src="/image003.png"
            alt="header"
            width={200}
            height={200}
            className="h-80 lg:w-1/2 w-full object-cover object-top rounded-md pt-5 blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>

  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1505547828843-176834e42154?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527599296290-e847cebb1d00?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-1/2 overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-30 w-30 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="stock images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" /> */}
    </div>
  );
};

// export const SkeletonFour = () => {
//   return (
//     <div className="flex flex-col items-center relative bg-transparent dark:bg-transparent mt-6">
//                 <Image
//             src="/bible.jpg"
//             alt="header"
//             width={1200}
//             height={1200}
//             className="h-full w-full object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
//           />
//     </div>
//   );
// };

