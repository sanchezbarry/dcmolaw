
import { PressCard } from "@/components/PressCards";
import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | About Us',
  description: 'Matrimonial Law is our firm’s specialty and key area of practice. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships.',
}


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
