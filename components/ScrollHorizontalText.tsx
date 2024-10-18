"use client";
import { useScroll } from "framer-motion";
import React from "react";

const ScrollHorizontalText = () => {
  const { scrollXProgress } = useScroll();
  //   const x = useTransform(scrollXProgress, [0, 1], [0, -600]);
  console.log(scrollXProgress, "scrollXProgress");
  const text =
    "React.js Next.js TailwindCSS Docker TypeScript Node.js Express.js MongoDB PostgreSQL GraphQL Prisma.js";
  return (
    <div className='w-screen mt-[15dvh]'>
      <h1 className='text-[8dvw] lg:text-[4dvw] font-bold uppercase inline-block whitespace-nowrap overflow-hidden '>
        {text}
      </h1>
    </div>
  );
};

export default ScrollHorizontalText;
