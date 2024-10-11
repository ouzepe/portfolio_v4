import React from "react";

export const About = () => {
  return (
    <div className='h-[100dvh] flex justify-center items-center' id='about'>
      <div className='w-[50vw] flex flex-col items-center'>
        <h1 className='mt-[40vh] uppercase font-bold text-6xl lg:text-[15dvw]'>
          Hello!{" "}
        </h1>
        <div className='text-[4vh] w-[50vh] lg:text-[3vw] lg:w-[30vw] text-center pt-[4vw]'>
          <h2>Hello i&apos;m a Developer Frontend</h2>
          <p>
            I build inclusive products and create innovative solutions for
            digital problems.
          </p>
        </div>

        <p className='mt-[10vw]'>
          I&apos;m a challenger by heart and builder by nature. Over the years i
          have spent time converting designs into pixel-perfect, performance,
          accessible, and responsive applications/websites. You can simply
          describe me as a front end addict. When i&apos;m not at the computer,
          i&apos;m usually hanging out with friends, learning a new crat, or
          going o a tour with my family and close friends.
        </p>
      </div>
    </div>
  );
};
