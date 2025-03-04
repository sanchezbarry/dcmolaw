'use client'

import { FeaturesSectionDemo } from "@/components/Hero";
import { Contact } from "@/components/Contact";

import { Separator } from "@/components/ui/separator"

 
export default function Home() {
  return (
    <>

        <FeaturesSectionDemo />
        <Contact />
        <Separator />

    </>

  )
}