'use client'

import React from "react";
import { SeanWongProfile } from "@/components/ProfileCard";

export default function SeanWong() {

  return (
    <>
    <div className="pt-16 pb-10 flex justify-center items-center lg:px-4 md:px-2">
    <SeanWongProfile backHref="/profiles/associates" />
    </div>
    </>
  );
}
