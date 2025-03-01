

import { FeaturesSectionDemo } from "@/components/Hero";
import { Contact } from "@/components/Contact";

import { Separator } from "@/components/ui/separator"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Welcome',
  description: 'Matrimonial Law is our firm’s specialty and key area of practice. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships.',
}
 
export default function Home() {
  return (
    <>

        <FeaturesSectionDemo />
        <Contact />
        <Separator />

    </>

  )
}