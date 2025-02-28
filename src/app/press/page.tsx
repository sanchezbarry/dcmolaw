'use client'
import { PressCard } from "@/components/PressCards";
import React from "react";



export default function Press() {

  return (
    <>
    <div className="pt-20 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
       Press
      </div>
    </div>
    <div className="flex justify-center items-center px-4">
    </div>
    <PressCard />
    </>
  );
}
