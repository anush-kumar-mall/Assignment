import Google from "../assets/google2.png";
import Amazon from "../assets/amazon2.png";
import Hubspot from "../assets/hubspot2.png";
import Linkedin from "../assets/linkedin.png";
import Shopify from "../assets/shopify.png";
import Facebook from "../assets/facebook.png";
import Certified from "../assets/certified.png";
import Quality from "../assets/quality.png";
import Global from "../assets/global.png";

export default function BrandPartners() {
  const partners = [
    {
      logo: Google,
      title: "Google Partners",
      text: "Certified Google Ads Training Partner",
    },
    {
      logo: Facebook,
      title: "Facebook Blueprint",
      text: "Official Facebook Marketing Partner",
    },
    {
      logo: Hubspot,
      title: "HubSpot Academy",
      text: "HubSpot Certified Training Provider",
    },
    {
      logo: Shopify,
      title: "Shopify Partners",
      text: "Shopify Plus Partner for E-commerce",
    },
    {
      logo: Linkedin,
      title: "LinkedIn Learning",
      text: "LinkedIn Marketing Solutions Partner",
    },
    {
      logo: Amazon,
      title: "Amazon Advertising",
      text: "Amazon DSP Certified Partner",
    },
  ];

  const recognition = [
    {
      icon: Certified,
      title: "Certified Curriculum",
      text: "Industry-approved course content",
    },
    {
      icon: Quality,
      title: "Quality Assurance",
      text: "Regular audits and updates",
    },
    {
      icon: Global,
      title: "Global Recognition",
      text: "Worldwide industry acceptance",
    },
  ];

  return (
    <section className="w-full font-inter px-6 py-16 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-extrabold">Our Brand Partners</h2>

        <p className="mt-3 text-sm text-gray-600">
          We partner with industry leaders to bring you the most current and relevant
          training. Our certifications are recognized and valued by employers worldwide.
        </p>
      </div>

      {/* Partner Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {partners.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 px-6 py-5 flex flex-col items-center text-center hover:shadow-md transition"
          >
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.title}
                className="h-5 w-5 object-contain"
              />
            </div>

            <h3 className="mt-3 font-semibold">{item.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Industry Recognition */}
      <div className="mt-14 max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 px-8 py-8">
        <h3 className="text-center text-lg font-extrabold">
          Industry Recognition
        </h3>

        <p className="text-center text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
          Our partnerships ensure that you receive training that meets the highest
          industry standards and prepares you for real-world challenges.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {recognition.map((item, i) => (
            <div key={i}>
              <img
                src={item.icon}
                alt={item.title}
                className="h-10 w-10 mx-auto"
              />
              <h4 className="font-semibold mt-2">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
