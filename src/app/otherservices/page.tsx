'use client'
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import Image from "next/image";

export default function OtherServices() {
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
          {"Other Areas of Practice"
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
              src="/otherareas.jpg"
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
 

        
        
Our team of lawyers is also experienced in a broad range of personal law matters. We offer highly competitive rates and are committed to serving as a one-stop centre for all your personal legal needs. The areas of personal law we handle include, but are not limited to, the following:
<br/><br/>

Adoption of Children
<br/>
Wills & Lasting Power of Attorney 
<br/>
Deed Poll (Change of Name)
<br/>
Power of Attorney
<br/>
Bankruptcy and Insolvency
<br/>
Landlord and Tenants matters
<br/>
Immigration matters
<br/>
Financial Claims and Settlements
<br/>
Conveyancing (Property Related Transactions)
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
      Other Areas of Practice
      </div>
    {/* <div className="pt-12 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Other Areas of Practice
      </div>
    </div>
    <div className="lg:px-64 lg:max-w-7xl px-8 pb-10 file:text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <p>
      
        Our team of lawyers is also experienced in a broad range of personal law matters. We offer highly competitive rates and are committed to serving as a one-stop centre for all your personal legal needs. The areas of personal law we handle include, but are not limited to, the following:
<br/><br/>

Adoption of Children
<br/>
Wills & Lasting Power of Attorney 
<br/>
Deed Poll (Change of Name)
<br/>
Power of Attorney
<br/>
Bankruptcy and Insolvency
<br/>
Landlord and Tenants matters
<br/>
Immigration matters
<br/>
Financial Claims and Settlements
<br/>
Conveyancing (Buying and Selling of Property)

        </p>
        
        <div className="flex justify-center items-center px-4 py-6">
      <Link href="/contact-us">
<Button className="mx-auto">Contact Us</Button>
</Link>
    </div>

      </div> */}
