"use client";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import Map from "@/components/Map";


export function Contact() {
  
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_mj7djes', 'template_cr8vpyo', form.current, 'Uhr95mJdb1211miPp')
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        });
    }
  };


  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };

  return (
    <>
       <div className="relative mx-auto my-5 flex max-w-7xl flex-col items-center justify-center">

      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#baa974] to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-[#baa974] to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#baa974] to-transparent" />
      </div>
      <div className="px-4 py-5 md:py-5">
        <h3 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold text-slate-700 md:text-xl lg:text-xl dark:text-slate-300">
          {"Contact Us"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h3>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-5 rounded-3xl  border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl  border-gray-300 dark:border-gray-700">
            {/* <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Landing page preview"
              className="aspect-[16/5] h-auto w-full object-centre object-cover"
              height={720}
              width={1920}
            /> */}
            <Map/>
          </div>
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
      {/* <p className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        
      </p> */}
      <b>DCMO Law Practice LLC</b>

      <br/>

Address: 133 New Bridge Rd, #14-10, Singapore 059413
<br/>

Phone: 6532 0123
<br/>

Fax : 6535 2265
<br/><br/>

        </motion.p>
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {/* <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button> */}
                {/* <Link className="mx-auto w-60 transform transition-all duration-300" href="/contact-us">
<Button className="mx-auto w-60 transform transition-all duration-300">Contact Us</Button>
</Link>
        </motion.div> */} 

      </div>
    </div>
    {/* <div className="pt-12 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Contact Us.
      </div>
    </div> */}

    {/* <div className="flex justify-center items-center px-4">

    </div>
    <Contact /> */}
    

    {/* <div id="anchor_form" className="mb-10 max-w-md w-full mx-auto border rounded-2x1 md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black shadow-md">

      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
      Send us an enquiry

      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Contact us for a consultation.
      </p>

      <form ref={form} className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="Adam" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Tan" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" placeholder="hello@dcmolaw.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Hey, I'm interested in a consultation. Let's chat!"
            className="flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn  from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Submit
        </button>
      </form>
    </div> */}
    </>
  );
}

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
