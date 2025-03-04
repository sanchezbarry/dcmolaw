'use client'
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function OtherServices() {

  return (
    <>
    <div className="pt-20 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Other Areas of Practice
      </div>
    </div>
    <div className="lg:px-64 lg:max-w-7xl px-8 pb-10 file:text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <p>
      
        Our team of lawyers are also experienced in other areas of personal law beyond matrimonial law. We also offer highly competitive rates for the handling of your matter entrusted to us as we seek to be a one-stop centre for all your personal legal needs. The range of other personal law matters handled by our firm include the following:
<br/><br/>

Adoption of Children
<br/>

Deed Poll (Change of Name)
<br/>
Power of Attorney
<br/>
Bankruptcy and Insolvency
<br/>
Landlord and Tenants matters
<br/>
Immigration matters
<br/>
Financial Claims and Settlements
<br/>
Conveyancing (Buying and Selling of Property)

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
