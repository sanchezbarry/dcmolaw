'use client'

import React from "react";
import { ProfileCardDisplay } from "@/components/ProfileCardDisplay";



export default function Partners() {

  return (
    <>
    <div className="pt-20 pb-10 flex justify-center items-center lg:px-4 md:px-2">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Our Senior Partners
      </div>
    </div>


    <ProfileCardDisplay />
    </>
  );
}
