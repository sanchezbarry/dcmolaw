'use client'
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { motion } from "motion/react";

export function HeroSectionOne() {
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
          {"Family Law"
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
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Landing page preview"
              className="aspect-[16/5] h-auto w-full object-centre object-cover"
              height={720}
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
      Compassionate Advocacy. Clear Guidance. Practical Solutions.
      <br/><br/>

  At <b>DCMO Law Practice LLC</b> our Family Law Department is dedicated to helping individuals and families navigate some of life’s most personal and sensitive challenges. With a deep understanding of both the legal and emotional complexities involved, our multidisciplinary team will provide thoughtful, strategic support tailored to your unique situation.

<br/><br/>

  Whether you’re dealing with a divorce, custody arrangements, maintenance disputes, or guardianship concerns, our team offers clear, practical advice—grounded in empathy and legal precision. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships. We focus on protecting your rights and your peace of mind for you to transition into your new life. 

<br/><br/>

  We recognise that no two families are the same. That’s why we approach each case with care, discretion, and a commitment to achieving outcomes that serve your best interests—both now and for the future.

<br/><br/>

  Both of our founding directors, Ms. Dorothy Chai & Ms. Mary Ong have more than 30 years of experience in practising Matrimonial Law. Let our Family Law team be your trusted partner to navigate successfully through the legal process. With DCMO, you’re not just another case—you’re someone we’re here to support.

<br/><br/>
Contentious and uncontentious Divorce proceedings
<br/>
Annulment of marriages
<br/>
Judicial separation
<br/>
Deed of Separation
<br/>
Deed of Settlement
<br/>
Maintenance and Assets Division
<br/>
Tracing of Matrimonial Assets and Injunctions
<br/>
Child Custody and Access applications
<br/>
Parental alienation
<br/>
International relocation
<br/>
Family Disputes
<br/>
Personal Protection and Exclusion Orders
<br/>
Variation of existing Court Orders
<br/>
Alternative dispute resolution e.g. mediation and negotiation
<br/>
Mental Capacity Law and Legacy Planning is a key area of practice in our firm. 
<br/>
        </motion.p>
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

export default function FamilyLaw() {

  return (
    <>
    <HeroSectionOne />
    {/* <div className="pt-12 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Family Law.
      </div>
    </div>
    <div className="lg:px-64 lg:max-w-7xl px-8 pb-10 file:text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">


      <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Compassionate Advocacy. Clear Guidance. Practical Solutions.
      </div>
      <br/>
<p>
  At <b>DCMO Law Practice LLC</b> our Family Law Department is dedicated to helping individuals and families navigate some of life’s most personal and sensitive challenges. With a deep understanding of both the legal and emotional complexities involved, our multidisciplinary team will provide thoughtful, strategic support tailored to your unique situation.
</p>
<br/>
<p>
  Whether you’re dealing with a divorce, custody arrangements, maintenance disputes, or guardianship concerns, our team offers clear, practical advice—grounded in empathy and legal precision. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships. We focus on protecting your rights and your peace of mind for you to transition into your new life. 
</p>
<br/>
<p>
  We recognise that no two families are the same. That’s why we approach each case with care, discretion, and a commitment to achieving outcomes that serve your best interests—both now and for the future.
</p>
<br/>
<p>
  Both of our founding directors, Ms. Dorothy Chai & Ms. Mary Ong have more than 30 years of experience in practising Matrimonial Law. Let our Family Law team be your trusted partner to navigate successfully through the legal process. With DCMO, you’re not just another case—you’re someone we’re here to support.
</p>
<br/><br/>
Contentious and uncontentious Divorce proceedings
<br/>
Annulment of marriages
<br/>
Judicial separation
<br/>
Deed of Separation
<br/>
Deed of Settlement
<br/>
Maintenance and Assets Division
<br/>
Tracing of Matrimonial Assets and Injunctions
<br/>
Child Custody and Access applications
<br/>
Parental alienation
<br/>
International relocation
<br/>
Family Disputes
<br/>
Personal Protection and Exclusion Orders
<br/>
Variation of existing Court Orders
<br/>
Alternative dispute resolution e.g. mediation and negotiation
<br/>
Mental Capacity Law and Legacy Planning is a key area of practice in our firm. 
<br/> */}
        {/* <p>
        Family & Matrimonial Matters
Matrimonial Law is our firm’s specialty and key area of practice. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships.

Our firm handles the full range of matrimonial work covering all areas of divorce and child-related applications. The range of matrimonial matters handled by our firm include the following:-
<br/><br/>
Contentious and uncontentious Divorce proceedings
<br/>
Annulment of marriages
<br/>
Judicial separation
<br/>
Deed of Separation
<br/>
Deed of Settlement
<br/>
Maintenance and Assets Division
<br/>
Tracing of Matrimonial Assets and Injunctions
<br/>
Child Custody and Access applications
<br/>
Parental alienation
<br/>
International relocation
<br/>
Family Disputes
<br/>
Personal Protection and Exclusion Orders
<br/>
Variation of existing Court Orders
<br/>
Alternative dispute resolution e.g. mediation and negotiation
<br/>
Mental Capacity Law and Legacy Planning is a key area of practice in our firm. 
<br/>

        </p> */}

        {/* <div className="flex justify-center items-center px-4 py-6">
      <Link href="/contact-us">
<Button className="mx-auto">Contact Us</Button>
</Link>
    </div>
      </div> */}

    </>
  );
}
