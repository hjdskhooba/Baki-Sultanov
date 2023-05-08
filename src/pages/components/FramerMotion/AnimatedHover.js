import { motion } from "framer-motion";

export const AnimatedHover = (
    { children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.22 }}
      transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      {children}
    </motion.div>
  );
};
