
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | About Us',
  description: 'Matrimonial Law is our firm’s specialty and key area of practice. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships.',
}

export default function FamilyLaw() {

  return (
    <>
    <div className="pt-16 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Family Law.
      </div>
    </div>
    <div className="lg:px-64 lg:max-w-7xl px-8 pb-10 file:text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <p>
        Family & Matrimonial Matters
Matrimonial Law is our firm’s specialty and key area of practice. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships.

Our firm handles the full range of matrimonial work covering all areas of divorce and child-related applications. The range of matrimonial matters handled by our firm include the following:-
<br/><br/>
Contentious and uncontentious Divorce proceedings
<br/>
Annulment of marriages
<br/>
Judicial separation
<br/>
Deed of Separation
<br/>
Deed of Settlement
<br/>
Maintenance and Assets Division
<br/>
Tracing of Matrimonial Assets and Injunctions
<br/>
Child Custody and Access applications
<br/>
Parental alienation
<br/>
International relocation
<br/>
Family Disputes
<br/>
Personal Protection and Exclusion Orders
<br/>
Variation of existing Court Orders
<br/>
Alternative dispute resolution e.g. mediation and negotiation
<br/>
Mental Capacity Law and Legacy Planning is a key area of practice in our firm. 
<br/>

        </p>

        <div className="flex justify-center items-center px-4 py-6">
      <Link href="/contact-us">
<Button className="mx-auto">Contact Us</Button>
</Link>
    </div>
      </div>

    </>
  );
}
