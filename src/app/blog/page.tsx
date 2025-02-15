'use client'

import React from "react";
import { BlogGrid } from "@/components/BlogGrid";

export default function Blog() {

  return (
    <>
    <div className="pt-20 pb-2 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Blog
      </div>
    </div>
    <div className="pt-20 pb-10">
      <BlogGrid />
      </div>
    
    </>
  );
}
