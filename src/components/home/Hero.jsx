import heroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1a0500]">
      {/* Banner image */}
      <img
        src={heroImage}
        alt="Optimizers Global LLC — your dedicated growth and marketing team"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      {/* Subtle overlay so overlaid text stays legible on lighter crops */}
      <div className="absolute inset-0 bg-linear-to-r from-black/15 via-transparent to-black/35" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1680px] flex-col justify-between px-6 pb-14 pt-32 sm:px-10 lg:px-16 lg:pt-40">
        {/* Top-left: headline */}
        <div>
          <h1 className="leading-[0.82] text-white">
            <span className="font-neue block text-[15vw] sm:text-[9vw] lg:text-[5.2vw]">
              WELCOME TO
            </span>
          </h1>
          <p className="mt-2 font-poppins text-xl text-white/90 sm:text-2xl lg:text-3xl">
            OPTIMIZERS <span className="font-bold text-white">GLOBAL LLC</span>
          </p>
        </div>

        {/* Bottom-right: supporting copy */}
        <div className="max-w-sm self-end text-left sm:text-right">
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