import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";

export default function StatsBanner() {
  const bannerRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // 🔒 sirf ek baar
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={bannerRef}
      className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
    >
      <div
        className="w-full max-w-6xl rounded-xl shadow-lg"
        style={{
          background: "linear-gradient(90deg, #0064E7 0%, #02287B 100%)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center text-white">

          {/* Placement Rate */}
          <div className="px-4 py-10 sm:py-12 lg:py-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              <CountUp end={95} suffix="%" start={startCount} />
            </h2>
            <p className="text-sm sm:text-base font-semibold">
              Placement Rate
            </p>
            <p className="text-xs sm:text-sm opacity-90 mt-1">
              Within 6 months of graduation
            </p>
          </div>

          {/* Average Salary */}
          <div className="px-4 py-10 sm:py-12 lg:py-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              ₹<CountUp end={75} suffix="K" start={startCount} />
            </h2>
            <p className="text-sm sm:text-base font-semibold">
              Average Salary
            </p>
            <p className="text-xs sm:text-sm opacity-90 mt-1">
              Starting salary for graduates
            </p>
          </div>

          {/* Partner Companies */}
          <div className="px-4 py-10 sm:py-12 lg:py-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              <CountUp end={50} suffix="K+" start={startCount} />
            </h2>
            <p className="text-sm sm:text-base font-semibold">
              Partner Companies
            </p>
            <p className="text-xs sm:text-sm opacity-90 mt-1">
              Actively hiring our graduates
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
