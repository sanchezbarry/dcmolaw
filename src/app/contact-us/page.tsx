'use client'

import React from "react";

import { Contact } from "@/components/Contact";

export default function ContactUs() {

  return (
    <>
    <div className="pt-12 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Contact Us.
      </div>
    </div>

    <div className="flex justify-center items-center px-4">

    </div>
    <Contact />
    </>
  );
}
