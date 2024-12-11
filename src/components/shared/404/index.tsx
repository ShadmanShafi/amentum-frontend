import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold text-gray-800"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          404
        </motion.h1>
        <p className="mt-4 text-xl text-gray-600">
          Looks like you've ventured into the unknown digital realm.
        </p>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist.
        </p>
        <Button className="mt-6" onClick={() => navigate("/")}>
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound404;
