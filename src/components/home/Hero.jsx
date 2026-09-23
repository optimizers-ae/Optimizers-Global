import React from "react";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-[#1a0500]">
      {/* Banner image */}
      <img
        src={heroImage}
        alt="Optimizers Global LLC — your dedicated growth and marketing team"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      {/* Subtle overlay so overlaid text stays legible on lighter crops */}
      <div className="absolute inset-0 bg-linear-to-r from-black/15 via-transparent to-black/35" />


      
      <div className="relative z-10 mx-auto flex w-full max-w-[1680px] flex-col gap-12 px-6 pb-16 pt-36 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:pb-24">
        {/* Left: headline */}
        <div>
          <h1 className="font-anton leading-[0.82] text-white">
            <span className="block text-[17vw] sm:text-[11vw] lg:text-[6.4vw]">
              WELCOME TO
            </span>
          </h1>
          <p className="mt-2 font-poppins text-2xl text-white/90 sm:text-3xl lg:text-[2.4vw]">
            OPTIMIZERS <span className="font-bold text-white">GLOBAL LLC</span>
          </p>
        </div>

        {/* Right: supporting copy */}
        <div className="max-w-sm lg:pb-3">
          <h2 className="font-poppins text-2xl font-bold leading-snug text-white sm:text-3xl">
            Your Dedicated
            <br />
            Growth &amp; Marketing Team
          </h2>
          <p className="mt-4 font-poppins text-base text-white/85 sm:text-lg">
            While you focus on <span className="font-semibold">leading</span> your
            business, we focus on growing it.
          </p>
        </div>
      </div>
    </section>
  );
}