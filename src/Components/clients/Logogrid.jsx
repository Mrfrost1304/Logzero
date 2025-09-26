// Logogrid.jsx
import React from "react";
import cl1 from "../../assets/Images/clientpage/cl-1.png";
import cl2 from "../../assets/Images/clientpage/cl-2.png";
import cl3 from "../../assets/Images/clientpage/cl-3.png";
import cl6 from "../../assets/Images/clientpage/cl-6.png";
import cl7 from "../../assets/Images/clientpage/cl-7.png";
import cl8 from "../../assets/Images/clientpage/cl-8.png";
import cl9 from "../../assets/Images/clientpage/cl-9.png";
import cl10 from "../../assets/Images/clientpage/cl-10.png";
import cl12 from "../../assets/Images/clientpage/cl-12.png";
import cl14 from "../../assets/Images/clientpage/cl-14.png";
import cl15 from "../../assets/Images/clientpage/cl-15.png";
import inflore from "../../assets/Images/clientpage/Inflore.png";
import ismart from "../../assets/Images/clientpage/Ismart.png";
import lip from "../../assets/Images/clientpage/LIP.png";
import vapes from "../../assets/Images/clientpage/vapes.png";

const logos = [
  { src: cl1, alt: "Client 1" },
  { src: cl2, alt: "Client 2" },
  { src: cl3, alt: "Client 3" },
  { src: cl6, alt: "Client 6" },
  { src: cl7, alt: "Client 7" },
  { src: cl8, alt: "Client 8" },
  { src: cl9, alt: "Client 9" },
  { src: cl10, alt: "Client 10" },
  { src: cl12, alt: "Client 12" },
  { src: cl14, alt: "Client 14" },
  { src: cl15, alt: "Client 15" },
  { src: inflore, alt: "Inflore" },
  { src: ismart, alt: "Ismart" },
  { src: lip, alt: "LIP" },
  { src: vapes, alt: "Vapes" },
];

const Logogrid = () => {
  return (
    <div className="px-6 md:pl-50 md:pr-28 bg-gray-50 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <img
            src={logo.src}
            alt={logo.alt}
            key={index}
            className="w-50       h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Logogrid;
