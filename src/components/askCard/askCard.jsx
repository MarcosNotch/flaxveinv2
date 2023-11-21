import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AskCard({ title, description }) {
  const [isPlus, setIsPlus] = useState(true);

  const toggleIcon = () => {
    setIsPlus((prevState) => !prevState);
  };

  return (
    <motion.div
    className={`md:w-[640px] hover:cursor-pointer flex-col w-full bg-gris3 rounded-xl border border-gris4 flex px-4 py-4`}
    initial={false}
    animate={{ maxHeight: isPlus ? "96px" : "500px" }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    onClick={toggleIcon}
  >  
      <div className="w-full flex "  >
        <div className="w-3/4 flex items-center justify-start">
          <p className="font-semibold text-lg md:text-2xl">{title}</p>
        </div>
        <div className="w-1/4 flex items-center justify-end pr-3">
          <img
            className="transition delay-75 ease-in duration-200 hover:cursor-pointer"
            width="24"
            height="24"
            src={isPlus ? "https://img.icons8.com/android/24/FFFFFF/plus.png" : "https://img.icons8.com/material-outlined/24/FFFFFF/minus.png"}
            alt="plus"
           
            style={{ transform: isPlus ? "rotate(0deg)" : "rotate(180deg)" }}
          />
        </div>
      </div>

      <AnimatePresence>
        {!isPlus && (
          <motion.div
            key="content"
            className="mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="font-medium">
              {description}
            </p>
            
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}