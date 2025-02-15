'use client'
import React from "react";
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Internship() {

  return (
    <>
    <div className="pt-20 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Internship
      </div>
    </div>
    <div className="lg:px-40 px-8 pb-10 file:text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <p>
        Please use this form if you would like to apply for an internship at DCMO Law Practice LLC. Applications submitted via other channels will not be considered.

All fields are compulsory to be filled. All applications should also be typewritten and accompanied by a cover email and your CV and a copy of your latest academic transcript setting out your law grades. Please send your applications to: <Link href="mailto:enquiry@dcmolaw.com.sg">enquiry@dcmolaw.com.sg</Link>



        </p>

      </div>
      <div className="flex justify-center items-center px-4 py-6">
      <Link href="/internship-application-form.pdf">
<Button className="mx-auto">Download Form</Button>
</Link>
    </div>

    </>
  );
}
