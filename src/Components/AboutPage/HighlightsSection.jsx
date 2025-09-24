import { useState, useEffect } from "react";
import { useCountUp } from "../Layout/Hooks/CountUpHook";

const HighlightsSection = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setShouldAnimate(true);
  }, []);

  const highlights = [
    {
      value: 500,
      suffix: "+",
      label: "Projects",
      description: "Completed successfully",
      border: false,
    },
    {
      value: 15,
      suffix: "+",
      label: "Industries",
      description: "Catered to clients globally",
      border: true,
    },
    {
      value: 13,
      suffix: "+",
      label: "Years",
      description: "Innovative tech experience globally.",
      border: true,
    },
  ];

  return (
    <div className="bg-[#1a1c1c] text-white pt-20 px-6 lg:px-35 pb-5">
      <h2 className="text-3xl font-bold mb-5 md:px-22 text-left text-white">Highlights</h2>
      <div className="flex flex-col md:flex-row justify-between items-center ">
        {highlights.map((highlight, index) => {
          const count = useCountUp(highlight.value, shouldAnimate, 0, 2000);
          return (
            <div
              key={index}
              className={`flex flex-col md:items-center text-center w-full 
                         ${
                           highlight.border
                             ? "border-t-2 border-gray-700 md:p-0 md:border-t-0 md:border-l-2 md:border-gray-700"
                             : ""
                         }`}
            >
              <div className="flex flex-row md:items-center justify-items-start">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-teal-400">
                  {count}
                  {highlight.suffix}
                </h3>
                <span className="ml-2 text-3xl lg:text-4xl font-extrabold text-teal-400">
                  {highlight.label}
                </span>
              </div>

              <p className="mt-1 mb-4 text-sm md:text-center text-left text-gray-400">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightsSection;
