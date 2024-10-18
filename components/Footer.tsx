import { LinkSocials } from "~/data/LinkSocials";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className='flex justify-center items-end  lg:h-[100dvh] w-full'>
      <div className='flex flex-col justify-center items-center  h-[70dvh] pb-[10%]'>
        <h1 className='font-bold text-[10dvw] lg:text-[13dvw] leading-[13dvw] tracking-[0px] lg:tracking-[10px] uppercase'>
          let&apos;s talk
        </h1>
        <div className='flex flex-col mt-[6dvh] lg:mt-[10dvh] items-center'>
          {LinkSocials.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.target}
              className='uppercase cursor-pointer font-light text-[4dvh] lg:text-[6dvh]  lg:leading-[60px] 2xl:leading-[90px]  tracking-[4px] lg:tracking-[6px] hover:text-hoverColor hover:delay-75 hover:duration-300 hover:ease-in-out'
            >
              {link.text}
            </Link>
          ))}
          <span className='mt-10'>
            <p className='text-sm'>
              © 2024 create by{" "}
              <a
                href='/'
                className='hover:text-hoverColor hover:delay-75 hover:duration-300 hover:ease-in-out cursor-pointer'
              >
                Ouzepe
              </a>
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
