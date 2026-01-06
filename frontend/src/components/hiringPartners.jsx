import React from "react";

const partners = [
  { name: "Google", openings: "150+ openings", logo: "G" },
  { name: "Microsoft", openings: "120+ openings", logo: "■" },
  { name: "Amazon", openings: "200+ openings", logo: "a" },
  { name: "Meta", openings: "80+ openings", logo: "∞" },
  { name: "Apple", openings: "60+ openings", logo: "" },
  { name: "Netflix", openings: "45+ openings", logo: "N" },
  { name: "Salesforce", openings: "90+ openings", logo: "☁" },
  { name: "Adobe", openings: "70+ openings", logo: "A" },
  { name: "Shopify", openings: "55+ openings", logo: "S" },
  { name: "HubSpot", openings: "40+ openings", logo: "⚙" },
  { name: "Uber", openings: "65+ openings", logo: "▶" },
  { name: "Airbnb", openings: "35+ openings", logo: "⌂" },
];

const HiringPartners = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-20 py-16">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Our <span className="text-blue-600">Hiring</span> Partners
        </h2>

        {/* Description with exact line endings */}
        <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
          We've built strong relationships with leading companies who actively
          <span className="hidden md:inline"><br /></span>
          recruit our graduates. Get direct access to exclusive job
          <span className="hidden md:inline"><br /></span>
          opportunities and fast-track your career growth.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 rounded-lg py-6 hover:shadow-md transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md text-xl font-semibold text-gray-700 mb-3">
              {partner.logo}
            </div>

            <p className="text-sm font-medium text-gray-800">
              {partner.name}
            </p>

            <p className="text-xs text-blue-600 mt-1">
              {partner.openings}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HiringPartners;