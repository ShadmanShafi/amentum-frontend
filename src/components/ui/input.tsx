import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Extend the props to include the motion properties and custom borderColor prop
type InputProps = React.ComponentProps<"input"> &
  MotionProps & {
    borderColor?: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, borderColor = "hsl(var(--primary))", ...props }, ref) => {
    return (
      <motion.input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
        // Animation props
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.1,
            ease: "easeOut",
          },
        }} // Animate from small to large, sliding into position
        whileFocus={{
          scale: 1.02, // Slightly grow when focused
          borderColor: borderColor, // Custom border color on focus
          transition: {
            duration: 0.1,
            ease: "easeOut",
          },
        }}
        whileHover={{
          scale: 1.02, // Slight zoom effect on hover
          cursor: "pointer",
          transition: {
            duration: 0.1,
            ease: "easeOut",
          },
        }}
        // Optional: Add a smooth border color transition on focus
        style={{
          borderColor: borderColor, // Default border color
          transition: "border-color 0.1s ease", // Smooth transition
        }}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
