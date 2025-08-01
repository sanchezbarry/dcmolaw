'use client'
import { AnimatedTestimonialsView } from "@/components/AnimatedTestimonials";
import React from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">

      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#baa974] to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-[#baa974] to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#baa974] to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"About Us"
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
        </h1>

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
            <Image
              src="/image003.png"
              alt="Landing page preview"
              className="lg:aspect-[16/7] sm:aspect-[square] h-auto w-full object-top object-cover"
              height={1080}
              width={1920}
            />
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
 

        
        
      
Each of our lawyers at <b>DCMO Law Practice LLC</b> is committed to journeying with our clients through some of life’s most challenging legal issues with clarity, empathy, compassion, and competence. Our firm has built a stellar reputation for excellence in <b>Matrimonial Law</b>, providing thoughtful, strategic support to individuals and families undergoing emotionally complex life transitions.
        
<br/><br/>
While our core focus remains family and matrimonial matters, our team of  <b>highly qualified consultants</b>  are veterans in their prime, boasting a depth of expertise across <b>general and civil litigation.</b> This allows us to offer comprehensive legal solutions tailored to the unique needs of each client.
<br/><br/>
We believe that the law is more than legal outcomes — <b>it is about people</b>.  We take the time to listen, understand, and advocate with integrity and empathy. Our client-centric approach means you can count on us to put your interest centre to our work every step of the way.
<br/><br/>
Whether you’re facing a difficult family crisis, a legal dispute, or seeking sound legal advice, <b>DCMO Law Practice LLC</b> is here to help you overcome your legal issues with confidence.

        </motion.p>

                <h1 className="pt-10 relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Awards"
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
        </h1>

        <AnimatedTestimonialsView />


        <motion.div
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
                <Link className="mx-auto w-60 transform transition-all duration-300" href="/contact-us">
<Button className="mx-auto w-60 transform transition-all duration-300">Contact Us</Button>
</Link>
        </motion.div>

      </div>
    </div>
  );
}


    {/* <div className="pt-12 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        About Us
      </div>
    {/* <div className="pt-12 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        About Us.
      </div>
    </div>
    <div className="lg:px-64 lg:max-w-7xl px-8 pb-10 file:text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      <p>
Each of our lawyers at <b>DCMO Law Practice LLC</b> is committed to journeying with our clients through some of life’s most challenging legal issues with clarity, empathy, compassion, and competence. Our firm has built a stellar reputation for excellence in <b>Matrimonial Law</b>, providing thoughtful, strategic support to individuals and families undergoing emotionally complex life transitions.
        
<br/><br/>
While our core focus remains family and matrimonial matters, our team of  <b>highly qualified consultants</b>  are veterans in their prime, boasting a depth of expertise across <b>general and civil litigation.</b> This allows us to offer comprehensive legal solutions tailored to the unique needs of each client.
<br/><br/>
We believe that the law is more than legal outcomes — <b>it is about people</b>.  We take the time to listen, understand, and advocate with integrity and empathy. Our client-centric approach means you can count on us to put your interest centre to our work every step of the way.
<br/><br/>
Whether you’re facing a difficult family crisis, a legal dispute, or seeking sound legal advice, <b>DCMO Law Practice LLC</b> is here to help you overcome your legal issues with confidence.
</p> */}
        {/* <p>

        Our Law Practice was founded upon the shared vision of our directors, Ms. Dorothy Chai and Ms. Mary Ong, to provide effective and practical legal solutions for our clients whilst training the next generation of Lawyers to do the same.

Before merging, Ms Dorothy Chai practiced under the award-winning M/s Dorothy Chai Law Practice for 4 years and Ms Mary Ong practiced under M/s Mary Ong & Company for 10 years. Both directors practiced with other law firms before branching out on their own and each have more than 20 years of experience primarily in Family litigation.

<br/><br/>
Our directors have established themselves as effective Family Law Practitioners who have successfully handled a diverse range of family and matrimonial law related matters at all levels of the Singapore Courts.
<br/><br/>
Notably, our Ms Mary Ong was the Lead Counsel in the first ever reported judgment on parental alienation delivered by the High Court of Singapore [ABW v ABV (2014) SGHC 29], where she successfully argued that the children who had been alienated from their mother should be returned to their mother’s custody. In his keynote address in 2015, the Chief Justice Sundaresh Menon highlighted the case as an example of the law setting “the standard of responsible conduct expected of family members in managing conflicts”.
<br/><br/>
Our Ms Dorothy Chai has won several awards and accolades for her work as a Family Practitioner and has been appointed Counsel by her fellow Practitioners in complex matrimonial and domestic relations disputes. She has successfully handled many contested and complicated divorces, some involving high profile individuals of high net worth. Recently, she has also single handedly successfully argued a landmark case involving complex and important point of laws pertaining to, amongst other things, the recognition of a foreign decree of Divorce in Singapore.   

        </p> */}
        {/* <div className="flex justify-center items-center px-4 py-6">
      <Link href="/contact-us">
<Button className="mx-auto">Contact Us</Button>
</Link>
    </div>
      </div>
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Awards
      </div>
    </div> */}
    {/* <AnimatedTestimonialsView /> */}
 