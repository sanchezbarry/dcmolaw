'use client'
import { AnimatedTestimonialsView } from "@/components/AnimatedTestimonials";
import React from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function AboutUs() {

  return (
    <>
    <div className="pt-12 pb-10 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        About Us.
      </div>
    </div>
    <div className="lg:px-64 lg:max-w-7xl px-8 pb-10 file:text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <p>
        Our Law Practice was founded upon the shared vision of our directors, Ms. Dorothy Chai and Ms. Mary Ong, to provide effective and practical legal solutions for our clients whilst training the next generation of Lawyers to do the same.

Before merging, Ms Dorothy Chai practiced under the award-winning M/s Dorothy Chai Law Practice for 4 years and Ms Mary Ong practiced under M/s Mary Ong & Company for 10 years. Both directors practiced with other law firms before branching out on their own and each have more than 20 years of experience primarily in Family litigation.

<br/><br/>
Our directors have established themselves as effective Family Law Practitioners who have successfully handled a diverse range of family and matrimonial law related matters at all levels of the Singapore Courts.
<br/><br/>
Notably, our Ms Mary Ong was the Lead Counsel in the first ever reported judgment on parental alienation delivered by the High Court of Singapore [ABW v ABV (2014) SGHC 29], where she successfully argued that the children who had been alienated from their mother should be returned to their mother’s custody. In his keynote address in 2015, the Chief Justice Sundaresh Menon highlighted the case as an example of the law setting “the standard of responsible conduct expected of family members in managing conflicts”.
<br/><br/>
Our Ms Dorothy Chai has won several awards and accolades for her work as a Family Practitioner and has been appointed Counsel by her fellow Practitioners in complex matrimonial and domestic relations disputes. She has successfully handled many contested and complicated divorces, some involving high profile individuals of high net worth. Recently, she has also single handedly successfully argued a landmark case involving complex and important point of laws pertaining to, amongst other things, the recognition of a foreign decree of Divorce in Singapore.   

        </p>
        <div className="flex justify-center items-center px-4 py-6">
      <Link href="/contact-us">
<Button className="mx-auto">Contact Us</Button>
</Link>
    </div>
      </div>
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Hear What People Say About Us
      </div>
    </div>
    <AnimatedTestimonialsView />
    </>
  );
}
