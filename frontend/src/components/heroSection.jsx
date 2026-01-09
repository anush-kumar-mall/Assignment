import SkyLogo from "../assets/skylogo.png";
import Main from "../assets/main.jpeg";

export default function HeroSection() {
  return (
    <section
      className="w-full h-screen font-inter
                 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Main})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Wrapper */}
      <div
        className="relative w-full max-w-7xl mx-auto
                   flex flex-col px-4 sm:px-6 h-full"
      >
        {/* SKY TOUCH CARD — MORE RIGHT SHIFT */}
        <div
          className="absolute top-32 md:top-44
                     right-[-6rem] md:right-[-8rem]
                     bg-gradient-to-r from-[#0A77FF] to-[#012A7C]
                     text-white shadow-2xl
                     px-8 sm:px-10 py-5 sm:py-6"
        >
          <div className="flex items-center gap-4 sm:gap-5 mr-28">
            {/* LOGO */}
            <img
              src={SkyLogo}
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              alt="Sky Touch Academy logo"
            />
            <div>
              <p className="text-base sm:text-lg font-semibold leading-none">
                Sky Touch
              </p>
              <p className="text-2xl sm:text-3xl font-bold leading-tight">
                Academy
              </p>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA SECTION — SAME POSITION */}
        <div className="pb-28 sm:pb-32 md:pb-36 flex flex-col">
          <div
            className="flex flex-col sm:flex-row gap-6 sm:gap-8
                       justify-center md:justify-end
                       w-full md:pr-32
                       translate-x-20 md:translate-x-44"
          >
            <button
              className="w-full sm:w-[260px] md:w-[320px]
                         px-8 sm:px-10 py-4
                         rounded-xl border-2 border-blue-500
                         text-blue-600 text-lg sm:text-xl font-semibold
                         bg-white hover:bg-blue-50 transition"
            >
              Free Demo Class
            </button>

            <button
              className="w-full sm:w-[260px] md:w-[320px]
                         px-8 sm:px-10 py-4
                         rounded-xl text-lg sm:text-xl font-semibold
                         text-white bg-gradient-to-r from-[#0A77FF] to-[#012A7C]
                         hover:opacity-90 transition"
            >
              Start Learning Today
            </button>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div
        className="absolute bottom-6 sm:bottom-8 md:bottom-10
                   left-1/2 -translate-x-1/2
                   flex items-center justify-center gap-3"
      >
        <span className="h-2.5 w-2.5 rounded-full border border-blue-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
      </div>
    </section>
  );
}
