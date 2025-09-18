import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimationDropdown = ({ label, children, menuClassName = "", isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.15, ease: "easeIn" } },
  };

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div ref={ref} className="relative inline-block box-border">
      <button
        onClick={isMobile ? handleToggle : undefined}
        onMouseOver=
    {!isMobile ? () => setIsOpen(true) : undefined}
        
        className=" flex items-center text-sm font-semibold text-white hover:text-gray-300  cursor-pointer hover:border-b-2 pb-1 hover:border-red-600"
      >
        {label}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div key="dropdown-menu" initial="hidden" animate="visible" exit="exit" variants={dropdownVariants} className={`${menuClassName}`}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimationDropdown;
