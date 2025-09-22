import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top of the page
      setIsAtTop(currentScrollY <= 50);
      
      // Only update direction if scroll difference is significant
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        const direction = currentScrollY > lastScrollY ? "down" : "up";
        setScrollDirection(direction);
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }
    };

    // Set initial state
    updateScrollDirection();

    // Add passive listener for better performance
    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return { scrollDirection, isAtTop };
};

export default useScrollDirection;