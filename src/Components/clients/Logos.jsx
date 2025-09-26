// Logos.jsx
import React from "react";
import left from "../../assets/Images/services/Leftcut.png";
import right from "../../assets/Images/services/RightCut.png";
import Logogrid from "./Logogrid";

const Logos = () => {
  return (
    <section className="w-full flex  justify-between bg-white py-10">
      {/* Left decoration */}
      <div className="hidden md:block    shrink">
        <img src={left} alt="left decoration" className="w-12 md:w-24" />
      </div>

      {/* Logo Grid */}
      <div className="flex-1 flex justify-center">
        <Logogrid />
      </div>

      {/* Right decoration */}
      <div className="hidden md:block w-15 md:w-50 shrink">
        <img src={right} alt="right decoration"  />
      </div>
    </section>
  );
};

export default Logos;
