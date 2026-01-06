export default function PremiumCourses() {
  const courses = Array(6).fill({
    level: "Intermediate",
    title: "Advanced Google Ads Certification",
    duration: "8 weeks",
    rating: "4.8",
    students: "8,750 students",
    price: "₹10,000",
    modules: [
      "Campaign Setup",
      "Ad Creation",
      "Keyword Research",
      "Bidding Strategies",
    ],
  });

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-16"
      style={{
        background: "linear-gradient(180deg, #1D3FFF 0%, #040C82 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Our Premium Courses
        </h2>

        <p className="text-sm sm:text-base max-w-3xl mx-auto mb-12 opacity-90">
          Choose from our comprehensive range of digital marketing courses
          designed by industry experts. Each course includes hands-on projects,
          real-world case studies, and career support.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative bg-gray-100 h-44 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                  ▶
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3">
                  {course.level}
                </span>

                <h3 className="font-bold text-base sm:text-lg mb-3 leading-snug">
                  {course.title}
                </h3>

                <div className="flex items-center text-xs text-gray-500 mb-4 gap-3">
                  <span>⏱ {course.duration}</span>
                  <span>⭐ {course.rating}</span>
                  <span>{course.students}</span>
                </div>

                <p className="text-sm font-semibold mb-2">
                  Course Modules:
                </p>

                <ul className="text-xs text-gray-500 mb-5 space-y-1">
                  {course.modules.map((m, i) => (
                    <li key={i}>• {m}</li>
                  ))}
                </ul>

                {/* PRICE + BUTTON */}
                <div className="mt-4">
                  <span className="block text-xl font-extrabold text-left text-[#1D3FFF] mb-3">
                    {course.price}
                  </span>

                  <button className="w-full bg-gradient-to-r from-[#1D3FFF] to-[#040C82] text-white text-sm py-3 rounded-lg hover:opacity-90 transition">
                    Enroll Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14">
          <button className="border border-white px-6 py-3 rounded-lg text-sm hover:bg-white hover:text-blue-700 transition">
            Explore All Courses
          </button>
        </div>

      </div>
    </section>
  );
}