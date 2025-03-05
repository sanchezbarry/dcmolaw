
'use client'
import React from "react";
import { AssociatesProfileCardDisplay } from "@/components/AssociatesProfileCardDisplay";



export default function Associates() {

  return (
    <>
    <div className="lg:pt-12 lg:pb-7 pt-12 flex justify-center items-center lg:px-4 md:px-2">
    <div className="lg:text-4xl text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Our Associates
      </div>
    </div>


    <AssociatesProfileCardDisplay />
    </>
  );
}
