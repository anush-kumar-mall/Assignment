import Google from "../assets/google.png";
import Adobe from "../assets/adobe.png";
import Airbnb from "../assets/airbnb.png";
import Amazon from "../assets/amazon.png";
import Apple from "../assets/apple.png";
import Hubspot from "../assets/hubspot.png";
import Meta from "../assets/meta.png";
import Microsoft from "../assets/microsoft.png";
import Netflix from "../assets/netflix.png";
import Uber from "../assets/uber.png";
import Salesforce from "../assets/salesforce.png";
import Shopify from "../assets/shopify2.png";

export default function LearnersAtCompanies() {
  const companies = [
    { name: "Google", logo: Google },
    { name: "Microsoft", logo: Microsoft },
    { name: "Amazon", logo: Amazon },
    { name: "Meta", logo: Meta },
    { name: "Apple", logo: Apple },
    { name: "Netflix", logo: Netflix },
    { name: "Adobe", logo: Adobe },
    { name: "Salesforce", logo: Salesforce },
    { name: "HubSpot", logo: Hubspot },
    { name: "Shopify", logo: Shopify },
    { name: "Uber", logo: Uber },
    { name: "Airbnb", logo: Airbnb },

  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
          Our Learners at{" "}
          <span className="text-blue-600">Leading Companies</span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Our graduates are making their mark at the world&apos;s most innovative
          <span className="hidden sm:inline"><br /></span>
          companies. Join them and take your career to the next level.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 sm:gap-y-10 gap-x-6">
          {companies.map((company) => (
            <div key={company.name} className="flex flex-col items-center">
              
              <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gray-100 shadow-sm">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
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
