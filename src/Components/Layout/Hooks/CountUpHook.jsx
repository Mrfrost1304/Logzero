import { useState, useEffect } from "react";


export const useCountUp = (endValue, shouldAnimate, delay = 0, duration = 2000) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const timer = setTimeout(() => {
      let start = 0;
      const step = endValue / (duration / 16);

      const counter = setInterval(() => {
        start += step;
        if (start >= endValue) {
          setDisplayValue(endValue);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [shouldAnimate, endValue, delay, duration]);

  return displayValue;
};
