export default function LearnersAtCompanies() {
  const companies = [
    { name: "Google", icon: "G" },
    { name: "Microsoft", icon: "■" },
    { name: "Amazon", icon: "a" },
    { name: "Meta", icon: "∞" },
    { name: "Apple", icon: "" },
    { name: "Netflix", icon: "N" },
    { name: "Adobe", icon: "A" },
    { name: "Salesforce", icon: "☁" },
    { name: "HubSpot", icon: "⚙" },
    { name: "Shopify", icon: "S" },
    { name: "Uber", icon: "U" },
    { name: "Airbnb", icon: "⌂" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
          Our Learners at{" "}
          <span className="text-blue-600">Leading Companies</span>
        </h2>

        {/* Subheading – fully responsive line break */}
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Our graduates are making their mark at the world&apos;s most innovative
          <span className="hidden sm:inline"><br /></span>
          companies. Join them and take your career to the next level.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 sm:gap-y-10 gap-x-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700 font-semibold text-base sm:text-lg shadow-sm">
                {company.icon}
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-700">
                {company.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}