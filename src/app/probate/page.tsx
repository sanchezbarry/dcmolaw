
'use client'
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import Image from "next/image";

export default function Probate() {
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
          {"Probate Law Services"
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
              src="/familylaw.jpg"
              alt="Landing page preview"
              className="lg:aspect-[16/5] sm:aspect-[1/2]  h-auto w-full object-centre object-cover"
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
      Guiding You Through with Sensitivity and Legal Clarity
      <br/><br/>

        
        
Losing a loved one is never easy and managing their estate can feel overwhelming during an already emotional time. At DCMO Law Practice LLC, our Probate Department provides compassionate, clear, and competent legal support throughout the estate administration process. 
<br/><br/>
Our experienced probate lawyers guide executors, administrators and beneficiaries through every step of the process including: 
<br/>
✔ Validating the Will - ensuring that the Will meets legal requirements and will be properly executed 
<br/>
✔ Estate Administration - identifying and valuing assets, settling debts and taxes, and distributing inheritances 
<br/>
✔ Intestate Succession - handling cases where no Will exists and ensuring rightful heirs receive their fair share
<br/><br/>
✔ Probate Disputes and Litigation - resolving conflicts over Wills, estate distribution and executor duties 
<br/><br/>
We help executors, administrators, and beneficiaries navigate their roles and responsibilities with confidence, ensuring that the wishes of the deceased are honoured and legal obligations are properly met. With our expertise, we streamline the probate process, minimizing delays and help administrators & executors to discharge their obligation to the beneficiaries. 
      
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




    {/* <div className="pt-12 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Probate Law Services 
      {/* <br/>Ensuring a Smooth Estate Administration */}
      {/* </div>
    </div>
    <div className="lg:px-64 lg:max-w-7xl px-8 pb-10 file:text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">

            <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Guiding You Through with Sensitivity and Legal Clarity
      </div>
      <br/> */} 

              {/* <p>
        
Losing a loved one is never easy and managing their estate can feel overwhelming during an already emotional time. At DCMO Law Practice LLC, our Probate Department provides compassionate, clear, and competent legal support throughout the estate administration process. 
<br/><br/>
Our experienced probate lawyers guide executors, administrators and beneficiaries through every step of the process including: 
<br/>
✔ Validating the Will - ensuring that the Will meets legal requirements and will be properly executed 
<br/>
✔ Estate Administration - identifying and valuing assets, settling debts and taxes, and distributing inheritances 
<br/>
✔ Intestate Succession - handling cases where no Will exists and ensuring rightful heirs receive their fair share
<br/><br/>
✔ Probate Disputes and Litigation - resolving conflicts over Wills, estate distribution and executor duties 
<br/><br/>
We help executors, administrators, and beneficiaries navigate their roles and responsibilities with confidence, ensuring that the wishes of the deceased are honoured and legal obligations are properly met. With our expertise, we streamline the probate process, minimizing delays and help administrators & executors to discharge their obligation to the beneficiaries. 
        </p> */}
        {/* <p>
        
Losing a loved one is never easy, and navigating the legal complexities of probate can add unnecessary stress during an already difficult time. At DCMO, we specialize in probate and estate administration, ensuring that your loved one’s assets are distributed efficiently, fairly, and in accordance with the law.

Our experienced probate lawyers guide executors, administrators, and beneficiaries through every step of the process, including:
<br/><br/>
✔ Validating the Will – Ensuring that the will meets legal requirements and is properly executed.
<br/>
✔ Estate Administration – Identifying and valuing assets, settling debts and taxes, and distributing inheritances.
<br/>
✔ Intestate Succession – Handling cases where no will exists and ensuring rightful heirs receive their fair share.
<br/>
✔ Probate Disputes & Litigation – Resolving conflicts over wills, estate distribution, and executor duties.
<br/><br/>
With our expertise, we streamline the probate process, minimizing delays and avoiding costly errors. Whether you are an executor seeking guidance or a beneficiary needing legal clarity, our team is here to support you every step of the way.
<br/><br/>
📞 Contact us today for a consultation and let us handle the legal complexities, so you can focus on what truly matters.

        </p> */}

        {/* <div className="flex justify-center items-center px-4 py-6">
      <Link href="/contact-us">
<Button className="mx-auto">Contact Us</Button>
</Link>
    </div>
      </div> */}
