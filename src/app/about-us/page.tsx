'use client'
// import { AnimatedTestimonialsView } from "@/components/AnimatedTestimonials";
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
Each of our lawyers at <b>DCMO Law Practice LLC</b> is committed to journeying with our clients through some of life’s most challenging legal issues with clarity, empathy, compassion, and competence. Our firm has built a stellar reputation for excellence in <b>Matrimonial Law</b>, providing thoughtful, strategic support to individuals and families undergoing emotionally complex life transitions.
        
<br/><br/>
While our core focus remains family and matrimonial matters, our team of  <b>highly qualified consultants</b>  are veterans in their prime, boasting a depth of expertise across <b>general and civil litigation.</b> This allows us to offer comprehensive legal solutions tailored to the unique needs of each client.
<br/><br/>
We believe that the law is more than legal outcomes — <b>it is about people</b>.  We take the time to listen, understand, and advocate with integrity and empathy. Our client-centric approach means you can count on us to put your interest centre to our work every step of the way.
<br/><br/>
Whether you’re facing a difficult family crisis, a legal dispute, or seeking sound legal advice, <b>DCMO Law Practice LLC</b> is here to help you overcome your legal issues with confidence.
</p>
        {/* <p>

        Our Law Practice was founded upon the shared vision of our directors, Ms. Dorothy Chai and Ms. Mary Ong, to provide effective and practical legal solutions for our clients whilst training the next generation of Lawyers to do the same.

Before merging, Ms Dorothy Chai practiced under the award-winning M/s Dorothy Chai Law Practice for 4 years and Ms Mary Ong practiced under M/s Mary Ong & Company for 10 years. Both directors practiced with other law firms before branching out on their own and each have more than 20 years of experience primarily in Family litigation.

<br/><br/>
Our directors have established themselves as effective Family Law Practitioners who have successfully handled a diverse range of family and matrimonial law related matters at all levels of the Singapore Courts.
<br/><br/>
Notably, our Ms Mary Ong was the Lead Counsel in the first ever reported judgment on parental alienation delivered by the High Court of Singapore [ABW v ABV (2014) SGHC 29], where she successfully argued that the children who had been alienated from their mother should be returned to their mother’s custody. In his keynote address in 2015, the Chief Justice Sundaresh Menon highlighted the case as an example of the law setting “the standard of responsible conduct expected of family members in managing conflicts”.
<br/><br/>
Our Ms Dorothy Chai has won several awards and accolades for her work as a Family Practitioner and has been appointed Counsel by her fellow Practitioners in complex matrimonial and domestic relations disputes. She has successfully handled many contested and complicated divorces, some involving high profile individuals of high net worth. Recently, she has also single handedly successfully argued a landmark case involving complex and important point of laws pertaining to, amongst other things, the recognition of a foreign decree of Divorce in Singapore.   

        </p> */}
        <div className="flex justify-center items-center px-4 py-6">
      <Link href="/contact-us">
<Button className="mx-auto">Contact Us</Button>
</Link>
    </div>
      </div>
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Awards
      </div>
    </div>
    {/* <AnimatedTestimonialsView /> */}
    </>
  );
}
