import React from "react";

const AdvancedTraining = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 font-inter">
      <div
        className="
          max-w-7xl mx-auto
          bg-gradient-to-r from-blue-600 to-blue-900
          rounded-xl shadow-lg
          px-6 sm:px-10 lg:px-14
          py-10 sm:py-12
          text-center text-white
        "
      >
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Ready for Advanced Career Training?
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
          Upgrade your skills with our advanced, industry-focused programs
          designed to help you gain practical experience, work on real projects,
          and achieve long-term career success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition w-full sm:w-auto">
            Explore Advanced Programs
          </button>

          <button className="border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition w-full sm:w-auto">
            Talk to a Career Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTraining;
