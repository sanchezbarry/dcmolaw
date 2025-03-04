'use client'
import React from "react";
import { ProfileCardDisplay } from "@/components/ProfileCardDisplay";





export default function Partners() {

  return (
    <>
    <div className="lg:pt-16 lg:pb-7 pt-12 flex justify-center items-center lg:px-4 md:px-2">
      <div className="lg:text-4xl text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Our Senior Partners
      </div>
    </div>


    <ProfileCardDisplay />
    </>
  );
}
