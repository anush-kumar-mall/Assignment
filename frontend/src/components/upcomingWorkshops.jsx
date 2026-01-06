import React from "react";

const workshops = [
  {
    id: 1,
    title: "Advanced Google Ads Mastery",
    date: "March 15, 2026",
    duration: "3 Hours",
    instructor: "Ankit Pandey",
    price: "₹10,000",
    level: "Advanced",
    learnings: [
      "Campaign Optimization",
      "Bidding Strategies",
      "Performance Analysis",
    ],
  },
  {
    id: 2,
    title: "Advanced Google Ads Mastery",
    date: "March 15, 2026",
    duration: "3 Hours",
    instructor: "Ankit Pandey",
    price: "₹10,000",
    level: "Advanced",
    learnings: [
      "Campaign Optimization",
      "Bidding Strategies",
      "Performance Analysis",
    ],
  },
  {
    id: 3,
    title: "Advanced Google Ads Mastery",
    date: "March 15, 2026",
    duration: "3 Hours",
    instructor: "Ankit Pandey",
    price: "₹10,000",
    level: "Advanced",
    learnings: [
      "Campaign Optimization",
      "Bidding Strategies",
      "Performance Analysis",
    ],
  },
];

export default function UpcomingWorkshops() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#1D3FFF_0%,#040C82_100%)] text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Workshops</h1>
      <p className="text-center max-w-2xl text-blue-100 mb-12">
        Join our intensive workshops led by industry experts. Get hands-on experience with the latest tools and strategies in digital marketing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className="bg-white text-gray-800 rounded-2xl shadow-xl flex flex-col overflow-hidden"
          >
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Image</span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {workshop.level}
                </span>
                <span className="font-semibold text-blue-600">{workshop.price}</span>
              </div>

              <h3 className="font-bold text-lg mb-3">{workshop.title}</h3>

              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>📅 {workshop.date}</li>
                <li>⏱ {workshop.duration}</li>
                <li>👤 {workshop.instructor}</li>
              </ul>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-2">What You'll Learn:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {workshop.learnings.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-12 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition">
        View All Workshops
      </button>
    </div>
  );
}