import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function AnimatedSection({ children, id }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-120px",   // 👈 trigger earlier, less recalculation
      }}
    >
      {children}
    </motion.section>
  );
}
