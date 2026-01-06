import React from "react";

const AdvancedTraining = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-blue-900 rounded-xl shadow-lg px-5 sm:px-8 md:px-12 py-10 sm:py-12 text-center text-white">
        
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Ready for More Advanced Training?
        </h2>

        {/* Responsive Description */}
        <p className="text-sm sm:text-base text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
          After completing our free courses, take your skills to the next level with our
          <span className="hidden md:inline"><br /></span>
          comprehensive paid programs that include live sessions, projects, and career support.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition w-full sm:w-auto">
            View Premium Courses
          </button>

          <button className="border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition w-full sm:w-auto">
            Schedule Free Consultation
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdvancedTraining;