
'use client'
import React from "react";
import { ConsultantProfileCardDisplay } from "@/components/ConsultantProfileCardDisplay";


export default function Consultants() {

  return (
    <>
    <div className="pt-20 pb-10 flex justify-center items-center lg:px-4 md:px-2">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Our Consultants
      </div>
    </div>


    <ConsultantProfileCardDisplay />
    </>
  );
}
