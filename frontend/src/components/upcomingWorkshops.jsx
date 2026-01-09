import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ added for navigation
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";

const workshops = [
  {
    id: 4,
    bg: S1,
    title: "AI Master Class (Upcoming)",
    date: "To Be Announced",
    duration: "Coming Soon",
    instructor: "Industry Experts",
    price: "Coming Soon",
    level: "Upcoming",
    learnings: [
      "Generative AI tools & real world applications",
      "Prompt engineering for business & automation",
      "AI-driven workflows and productivity hacks",
      "Practical use cases across industries",
    ],
  },
  {
    id: 5,
    bg: S2,
    title: "Data Analytics (Upcoming)",
    date: "To Be Announced",
    duration: "Coming Soon",
    instructor: "Industry Experts",
    price: "Coming Soon",
    level: "Upcoming",
    learnings: [
      "Data visualization & storytelling",
      "Excel, SQL & Power BI",
      "Business intelligence & reporting",
      "Real-world datasets and case studies",
    ],
  },
  {
    id: 6,
    bg: S3,
    title: "UI/UX Design Mastery (Upcoming)",
    date: "To Be Announced",
    duration: "Coming Soon",
    instructor: "Industry Experts",
    price: "Coming Soon",
    level: "Upcoming",
    learnings: [
      "User research & design thinking",
      "Wireframing & prototyping (Figma)",
      "User experience psychology",
      "Real-world app & website design projects",
    ],
  },
];

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

export default function UpcomingWorkshops() {
  const navigate = useNavigate(); // ✅ added navigation

  return (
    <section
      className="min-h-screen bg-[linear-gradient(135deg,#1D3FFF_0%,#040C82_100%)]
                 text-white flex flex-col items-center py-16 px-6 font-inter" // <- font-inter applied here
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Upcoming Workshops
      </h1>

      <p className="text-center max-w-2xl text-blue-100 mb-12">
        Real skills. Real mentors. Real career growth.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {workshops.map((workshop) => (
          <motion.div
            key={workshop.id}
            variants={cardIdle}
            animate="animate"
            whileHover={{
              y: -14,
              scale: 1.03,
              boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
            }}
            className="bg-white text-gray-800 rounded-2xl
                       flex flex-col overflow-hidden cursor-pointer font-inter" // <- font-inter added
          >
            {/* Thumbnail */}
            <div
              className="relative h-40 flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${workshop.bg})` }}
            >
              <div className="absolute inset-0 bg-black/25" />
              <div className="relative z-10 w-12 h-12 rounded-full bg-white
                              flex items-center justify-center shadow-lg font-inter">
                ▶
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 font-inter"> {/* <- font-inter added */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-blue-100 text-blue-600
                                 px-3 py-1 rounded-full">
                  {workshop.level}
                </span>
                <span className="font-semibold text-blue-600">
                  {workshop.price}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-3">
                {workshop.title}
              </h3>

              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>📅 {workshop.date}</li>
                <li>⏱ {workshop.duration}</li>
                <li>👤 {workshop.instructor}</li>
              </ul>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-2">
                  What You&apos;ll Learn:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {workshop.learnings.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* ✅ Enroll Now navigation */}
              <button
                onClick={() => {
                  navigate("/enroll");  
                  window.scrollTo(0, 0); 
                }}
                className="mt-auto bg-gradient-to-r from-[#1D3FFF] to-[#040C82]
                           text-white py-2 rounded-lg font-semibold
                           hover:opacity-90 transition font-inter"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Button */}
      <button
        onClick={() => {
          navigate("/workshops");
          window.scrollTo(0, 0);
        }}
        className="mt-12 bg-white text-blue-600 font-semibold
                   px-6 py-3 rounded-lg shadow
                   hover:bg-blue-50 transition font-inter"
      >
        Browse Our Workshops
      </button>
    </section>
  );
}
