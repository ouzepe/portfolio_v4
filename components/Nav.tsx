import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoOJL from "~/assets/ojl-white.svg";

export const Nav = () => {
  return (
    <nav className='w-full fixed flex justify-center'>
      <div className='w-[90vw] flex justify-between mt-4 text-xl font-bold uppercase'>
        <Link href='#work'>Work</Link>
        <div className='w-14 h-12 relative'>
          <Image src={LogoOJL} alt='logo-ojl' fill quality={100} />
        </div>
        <Link href='#about'>About</Link>
      </div>
    </nav>
  );
};
