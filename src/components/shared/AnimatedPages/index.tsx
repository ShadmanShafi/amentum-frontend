import { ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
}

export const AnimatedAuthFlowForm = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex justify-center md:h-screen sm:items-center"
    >
      {children}
    </motion.div>
  );
};
