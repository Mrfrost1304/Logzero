import  { useState, useEffect, useRef } from "react";
import { useCountUp } from "../Layout/Hooks/CountUpHook";

const Whychooseus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 13, label: "Years Experience", suffix: "+" },
    { value: 650, label: "Projects", suffix: "+" },
    { value: 250, label: "Clients", suffix: "+" },
    { value: 50, label: "Teams", suffix: "+" },
    { value: 15, label: "Industries", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-6 overflow-x-hidden" 
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          WHY CHOOSE US?
        </h2>

        <div className="grid grid-cols-2 gap-y-10 gap-x-4 md:grid-cols-5">
          {stats.slice(0, 4).map((item, index) => (
            <StatItem
              key={index}
              value={item.value}
              label={item.label}
              suffix={item.suffix}
              shouldAnimate={isVisible}
              delay={index * 100}
              showDivider={index !== 4}
              showMobileDivider={index === 0 || index === 2}
            />
          ))}
          
          <div className="col-span-2 md:col-span-1">
            <StatItem
              key={4}
              value={stats[4].value}
              label={stats[4].label}
              suffix={stats[4].suffix}
              shouldAnimate={isVisible}
              delay={4 * 100}
              showDivider={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const StatItem = ({ value, label, suffix, shouldAnimate, delay, showDivider, showMobileDivider }) => {
  const displayValue = useCountUp(value, shouldAnimate, delay, 1000);

  return (
    <div className="flex flex-col items-center relative">
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#49eec3] mb-2">
        {displayValue}
        {suffix}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-300">{label}</p>

     
      {showDivider && (
        <span className="hidden md:block absolute top-1/4 right-0 translate-x-1/2 h-10 border-r border-gray-600"></span>
      )}
      {showMobileDivider && (
        <span className="block md:hidden absolute top-1/4 right-0 translate-x-1/2 h-10 border-r border-gray-600"></span>
      )}
    </div>
  );
};
export default Whychooseus;