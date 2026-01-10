import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

import G1 from "../assets/g1.jpeg";
import G2 from "../assets/g2.jpeg";
import G3 from "../assets/g3.jpeg";

const images = [G1, G2, G3];

export default function GallerySection() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleViewAll = () => {
    navigate("/allImages"); // ✅ navigate to allImages page
  };

  return (
    <section className="w-full py-20 px-6 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-blue-600">Gallery</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our learning environment and workshops.
          </p>
        </motion.div>

        {/* Large Images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0px 25px 40px rgba(0,0,0,0.25)",
              }}
              className="
                w-full
                h-[260px]
                sm:h-[340px]
                md:h-[420px]
                lg:h-[480px]
                rounded-2xl
                overflow-hidden
                cursor-pointer
              "
            >
              <img
                src={img}
                alt="Gallery"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <button
            onClick={handleViewAll} // ✅ added onClick
            className="
              px-10 py-4
              text-lg font-semibold
              text-white
              bg-blue-600
              rounded-full
              hover:bg-blue-700
              transition-all duration-300
              shadow-lg
            "
          >
            View All Images
          </button>
        </motion.div>

      </div>
    </section>
  );
}
