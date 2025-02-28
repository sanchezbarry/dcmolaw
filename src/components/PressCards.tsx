"use client";
import { cn } from "@/utils/cn";
// import Image from "next/image";
import Link from "next/link";

export function PressCard() {
  return (
    <div className="lg:max-w-5xl w-auto mx-auto max-w-xs flex gap-3 group/card">
      <Link href="https://learn.asialawnetwork.com/2017/09/18/law-firm-feature-dorothy-chai-and-mary-ong-law-practice-matrimonial-lawyers-with-hearts/">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://learn.asialawnetwork.com/wp-content/uploads/2017/09/DCMO_Dorothy_Chai_Mary_Ong_Asia_Law_Network_Premium_Lawyers-4.jpg)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">  
              Asia Law Network
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Dorothy Chai and Mary Ong Law Practice – Matrimonial Lawyers with Hearts
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Dorothy Chai and Mary Ong Law Practice (DCMO) was started in July 2016. 
          </p>
        </div>
      </div>
      </Link>
{/*
      <Link href="https://learn.asialawnetwork.com/2017/09/18/law-firm-feature-dorothy-chai-and-mary-ong-law-practice-matrimonial-lawyers-with-hearts/">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://learn.asialawnetwork.com/wp-content/uploads/2017/09/DCMO_Dorothy_Chai_Mary_Ong_Asia_Law_Network_Premium_Lawyers-4.jpg)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">  
              Asia Law Network
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Law Firm Feature: Dorothy Chai and Mary Ong Law Practice – Matrimonial Lawyers with Hearts
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Dorothy Chai and Mary Ong Law Practice (DCMO) was started in July 2016. 
          </p>
        </div>
      </div>
      </Link>

 
      
      <Link href="https://learn.asialawnetwork.com/2017/09/18/law-firm-feature-dorothy-chai-and-mary-ong-law-practice-matrimonial-lawyers-with-hearts/">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://learn.asialawnetwork.com/wp-content/uploads/2017/09/DCMO_Dorothy_Chai_Mary_Ong_Asia_Law_Network_Premium_Lawyers-4.jpg)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">  
              Asia Law Network
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Law Firm Feature: Dorothy Chai and Mary Ong Law Practice – Matrimonial Lawyers with Hearts
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Dorothy Chai and Mary Ong Law Practice (DCMO) was started in July 2016. 
          </p>
        </div>
      </div>
      </Link> */}
    </div>
  );
}
