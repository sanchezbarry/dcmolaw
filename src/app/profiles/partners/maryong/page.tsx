'use client'
import React from "react";
import { MaryProfileCard } from "@/components/ProfileCard";

export default function MaryOng() {

  return (
    <>

    <div className="pt-16 pb-10 flex justify-center items-center lg:px-4 md:px-2">
    <MaryProfileCard backHref="/profiles/partners" />
    </div>
    </>
  );
}
