export default function Alumni() {
  return (
    <section className="w-full font-inter px-6 py-16">
      
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-extrabold">
          Our Alumni Leading the <span className="text-blue-600">Digital World</span>
        </h2>

        <p className="mt-3 text-sm text-gray-600">
          Join thousands of successful professionals who have transformed their careers with 
          our expert-led programs and are now working at top companies worldwide.
        </p>
      </div>

      {/* Cards Row */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[1,2,3].map((i) => (
          <div key={i} className="rounded-2xl shadow-lg overflow-hidden bg-white">

            {/* Top Placeholder Image Area */}
            <div className="h-44 bg-gray-200" />

            {/* Bottom Gradient Panel */}
            <div className="bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white px-6 py-5">

              <p className="font-semibold text-sm text-center">Person X</p>

              <div className="mt-2 flex items-center justify-center gap-2 text-xs opacity-90">
                <span>Company Y</span>
                <span>——</span>
                <span>Position Z</span>
              </div>

              <p className="mt-3 text-[11px] leading-relaxed opacity-90 text-center">
                “SkyTouch Academy transformed my career. The practical approach and industry insights 
                helped me land my dream job at Google.”
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}