'use client'

import React from "react";
import { MunLoonProfileCard } from "@/components/ProfileCard";

export default function MunLoon() {

  return (
    <>
    <div className="pt-16 pb-10 flex justify-center items-center lg:px-4 md:px-2">
    <MunLoonProfileCard backHref="/profiles/associates" />
    </div>
    </>
  );
}
