
'use client'
import React from "react";
import { DorothyProfileCard } from "@/components/ProfileCard";

export default function DorothyChai() {

  return (
    <>

    <div className="pt-16 pb-10 flex justify-center items-center lg:px-4 md:px-2">
    <DorothyProfileCard backHref="/profiles/partners" />
    </div>
    </>
  );
}


