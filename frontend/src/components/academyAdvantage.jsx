export default function AcademyAdvantage() {
  const features = [
    {
      title: "Live Interactive Classes",
      desc: "Engage with instructors and peers in real-time sessions with live discussions and hands-on activities.",
    },
    {
      title: "Industry Case Studies",
      desc: "Learn from real-world scenarios and successful campaigns to stay ahead of market trends and competition.",
    },
    {
      title: "Expert Mentorship",
      desc: "Get personalized guidance from industry veterans with years of practical experience.",
    },
    {
      title: "Industry Certifications",
      desc: "Earn recognized certifications that boost your credibility and career prospects.",
    },
    {
      title: "Career Placement Support",
      desc: "Access our extensive network of hiring partners and get dedicated job placement assistance.",
    },
    {
      title: "Lifetime Access",
      desc: "Keep learning with lifetime access to course materials, updates, and community support.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
          Get the{" "}
          <span className="text-blue-600">Sky Touch Academy</span>{" "}
          Advantage
        </h2>

        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-12">
          Experience the difference with our comprehensive approach to digital
          marketing education.We don't just teach 
          
          theory — we prepare you for
          real-world success.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 text-left hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 mb-4"></div>

              <h3 className="font-semibold text-base sm:text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}