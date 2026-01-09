import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";

const thumbnails = [S1, S2, S3, S4];

const cardIdle = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function AnimatedSection({ children, id }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 w-full px-4 sm:px-6 lg:px-8 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: "linear-gradient(180deg, #1D3FFF 0%, #040C82 100%)",
      }}
    >
      {children}
    </motion.section>
  );
}

export default function PremiumCourses() {
  const navigate = useNavigate(); // 🔥 hook for navigation

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
    <AnimatedSection id="courses">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Our Premium Courses</h2>
        <p className="text-sm max-w-3xl mx-auto mb-12 opacity-90">
          Industry-designed programs with hands-on projects and career support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardIdle}
              animate="animate"
              whileHover={{
                y: -14,
                scale: 1.03,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
              }}
              className="bg-white text-gray-800 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="relative h-44 bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `url(${
                    thumbnails[index % thumbnails.length]
                  })`,
                }}
              >
                <div className="absolute inset-0 bg-black/35" />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
                >
                  ▶
                </motion.div>
              </div>

              <div className="p-6 text-left">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3">
                  {course.level}
                </span>

                <h3 className="font-bold text-lg mb-3 leading-snug">
                  {course.title}
                </h3>

                <div className="flex items-center text-xs text-gray-500 mb-4 gap-3">
                  <span>⏱ {course.duration}</span>
                  <span>⭐ {course.rating}</span>
                  <span>{course.students}</span>
                </div>

                <p className="text-sm font-semibold mb-2">Course Modules:</p>

                <ul className="text-xs text-gray-500 mb-5 space-y-1">
                  {course.modules.map((m, i) => (
                    <li key={i}>• {m}</li>
                  ))}
                </ul>

                <span className="block text-xl font-extrabold text-[#1D3FFF] mb-3">
                  {course.price}
                </span>

                {/* 🔥 Navigate on Enroll Now */}
                <button
  onClick={() => {
    navigate("/enroll");  // navigate to enroll page
    window.scrollTo(0, 0); // scroll to top
  }}
  className="w-full bg-gradient-to-r from-[#1D3FFF] to-[#040C82] text-white text-sm py-3 rounded-lg hover:opacity-90 transition"
>
  Enroll Now
</button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Courses */}
        <div className="mt-14">
          <button
  onClick={() => {
    navigate("/courses");   // navigate to courses page
    window.scrollTo(0, 0);  // scroll page to top
  }}
  className="border border-white px-6 py-3 rounded-lg text-sm hover:bg-white hover:text-blue-700 transition"
>
  Explore All Courses
</button>

        </div>
      </div>
    </AnimatedSection>
  );
}
