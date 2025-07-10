'use client'
import Image from "next/image"
import Link from "next/link"
export function Footer() {
    return (

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
                  <Image 
                    src="/dcmowhite.png" 

                    // className="h-8 me-3" 
                    alt="DCMO Logo" 
                    width={200} height={200} 
                    className="m-auto object-cover object-center rounded-md"/>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/about-us" className="hover:underline">About</Link>
                      </li>
                      <li>
                          <Link href="/contact-us" className="hover:underline">Contact</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">What We Do</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/familylaw" className="hover:underline ">Family Law</Link>
                      </li>
                      <li>
                          <Link href="/probate" className="hover:underline">Probate</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Others</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="otherservices" className="hover:underline">Other Services</Link>
                      </li>
                      <li>
                          <Link href="internships" className="hover:underline">Internships</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="/" className="hover:underline">DCMO</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 text-gray-500 text-sm dark:text-gray-400">
DCMO Law Practice LLC
<br/>
133 New Bridge Road #14-10 Chinatown Point
<br/>
Singapore 059413
<br/>
Tel : 65320123
Fax : 6535 2265
          </div>
      </div>
    </div>
</footer>

    )
}