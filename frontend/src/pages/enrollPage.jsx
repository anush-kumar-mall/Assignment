import React, { useState } from "react";
import Navbar from "../components/navbar"; // ✅ Navbar import
import Footer from "../components/footer"; // ✅ Footer import

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrollment Data:", formData);
    alert("Enrollment Successful!");
  };

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Enroll Form Section */}
      <section
        className="w-full min-h-screen flex items-center justify-center px-4
                   bg-[linear-gradient(135deg,#1D3FFF_0%,#040C82_100%)] mt-24"
      >
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black">Enroll Now</h2>
            <p className="text-sm text-gray-600 mt-2">
              Fill in the details below to reserve your seat
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           text-black placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-[#1D3FFF]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           text-black placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-[#1D3FFF]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           text-black placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-[#1D3FFF]"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Select Course / Workshop
              </label>
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           text-black
                           focus:outline-none focus:ring-2 focus:ring-[#1D3FFF]"
              >
                <option value="">Choose an option</option>
                <option>Advanced Google Ads Mastery</option>
                <option>Meta Ads Scaling Workshop</option>
                <option>SEO Growth Bootcamp</option>
                <option>YouTube Ads Masterclass</option>
                <option>Email Marketing Automation</option>
                <option>E-commerce Growth Workshop</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Experience Level
              </label>
              <select
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           text-black
                           focus:outline-none focus:ring-2 focus:ring-[#1D3FFF]"
              >
                <option value="">Select level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Any specific goals or questions?"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           text-black placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-[#1D3FFF]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1D3FFF] to-[#040C82]
                         text-white font-semibold py-3 rounded-lg
                         hover:opacity-90 transition"
            >
              Confirm Enrollment
            </button>
          </form>

          {/* Footer Note */}
          <p className="text-xs text-center text-gray-500 mt-6">
            By enrolling, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
