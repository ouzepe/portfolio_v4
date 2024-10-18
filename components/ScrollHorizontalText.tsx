"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

const ScrollHorizontalText = () => {
  const { scrollXProgress } = useScroll();
  const x1 = useTransform(scrollXProgress, [0, 1], [0, -120]);
  console.log(x1, "x");
  const text =
    "React.js Next.js TailwindCSS Docker TypeScript Node.js Express.js MongoDB PostgreSQL GraphQL Prisma.js";
  return (
    <div className='w-screen mt-[15dvh]'>
      <motion.h1
        style={{ x: x1 }}
        className='text-[8dvw] lg:text-[4dvw] font-thin uppercase inline-block whitespace-nowrap animate-defilement-rtl overflow-hidden '
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default ScrollHorizontalText;
