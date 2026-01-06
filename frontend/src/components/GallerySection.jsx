export default function GallerySection() {
  return (
    <section className="w-full font-inter py-16 px-6">
      <div className="mx-auto max-w-5xl text-center">
        
        {/* Title */}
        <h2 className="text-lg font-semibold">
          Our <span className="text-blue-600 font-bold">Gallery</span>
        </h2>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">

          {[1,2,3,4,5,6,7,8].map((i, idx) => (
            <div
              key={i}
              className={`h-28 w-24 sm:h-32 sm:w-28 md:h-36 md:w-32 rounded-md bg-white shadow 
                          border ${idx === 0 ? "border-blue-500" : "border-gray-300"}
                          hover:scale-105 transition`}
            />
          ))}

        </div>
      </div>
    </section>
  );
}