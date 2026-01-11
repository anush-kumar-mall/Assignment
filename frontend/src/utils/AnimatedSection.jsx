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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
