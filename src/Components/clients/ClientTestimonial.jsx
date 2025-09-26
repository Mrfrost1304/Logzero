import React from "react";
import { Star } from "lucide-react";
import maskGroup10 from "../../assets/Images/clientpage/Mask-Group-10.png";
import left from "../../assets/Images/services/Leftcut.png";
import right from "../../assets/Images/services/RightCut.png";
const ClientTestimonial = () => {
  return (
    <>
    
      <section className=" w-full  flex   justify-between bg-white  pb-10">
        {/* Left decoration */}
        <div className="hidden md:block  w-50  shrink">
        <img src={left} alt="left decoration" className="" />
      </div>
        <div className="w-5xl md:pt-20 bg-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              WHAT OUR <span className="text-red-500 font-normal">CLIENTS</span>{" "}
              SAY ABOUT US
            </h2>

            {/* 5 Star Rating */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-lg p-8 relative">
            {/* Large quotation mark background */}
            <div className="absolute top-4 right-8 text-gray-200 text-8xl font-serif leading-none select-none">
              "
            </div>

            {/* Testimonial Text */}
            <div className="relative z-10 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                We thank logzerotechnologies.com for the good work done in
                designing and hosting our website www.goodpeoplerelations.in.
                The team makes sure to clearly understand the requirements from
                the client and provides with very valuable suggestions
              </p>
            </div>

            {/* Client Information */}
            <div className="flex items-center">
              {/* Profile Image */}
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 overflow-hidden">
                <img
                  src={maskGroup10}
                  alt="G P Rao"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Client Details */}
              <div>
                <h4 className="text-gray-800 font-semibold text-lg">G P Rao</h4>
                <p className="text-gray-500 text-sm">CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-15 md:w-50 shrink">
        <img src={right} alt="right decoration"  />
      </div>
      </section>
    </>
  );
};

export default ClientTestimonial;
