import { ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
}

export const AnimatedAuthFlowForm = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center h-full"
    >
      {children}
    </motion.div>
  );
};
