import SkyLogo from "../assets/skylogo.png";
import Main from "../assets/main.jpeg";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[80vh] font-inter flex items-center justify-center
                 px-4 sm:px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Main})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto">

        {/* Logo Card */}
        <div className="w-full flex justify-center md:justify-end mt-10 md:mt-24">
          <div
            className="bg-gradient-to-r from-[#0A77FF] to-[#012A7C]
                       text-white rounded-xl shadow-xl
                       px-6 sm:px-8 py-4 sm:py-6"
          >
            <div className="flex items-center gap-3 sm:gap-5">
              <img
                src={SkyLogo}
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                alt="Sky Touch Academy logo"
              />
              <div>
                <p className="text-sm sm:text-base font-semibold leading-none">
                  Sky Touch
                </p>
                <p className="text-xl sm:text-2xl font-bold leading-tight">
                  Academy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 sm:mt-44 md:mt-64 flex flex-col gap-10 w-full">

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8
                          justify-center md:justify-end w-full md:pr-10">
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

          {/* Dots */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full border border-blue-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
          </div>
        </div>

      </div>
    </section>
  );
}