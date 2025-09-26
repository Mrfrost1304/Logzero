import React from "react";
import teamImage from "../../assets/Images/clientpage/discussion.png";
// Import your image (assuming you're using a tool like Webpack/Vite)
// import teamImage from './path/to/your/image_6c9ca8.jpg';
// If you're using the public folder, just use the path as a string.
// Placeholder path

const VisionSection = () => {
  return (
    // Outer container with padding and a white background
    <section className="py-16 md:py-15 bg-white ">
      {/* Centered content container (max-width control) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: two columns for large screens, stacked for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* === LEFT COLUMN: Text Content === */}
          <div className="order-2 md:order-1">
            {/* Headline and Title */}
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
              {/* Highlight the first word with a different color */}
              <span className="text-red-600">WE</span> TRANSFORM YOUR
              <br />
              VISION INTO CAPTIVATING
              <br />
              EXPERIENCES
            </h2>

            {/* Description Paragraph */}
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              We combine dedication and innovation to ensure each client's
              vision becomes a reality. We've partnered with brands from diverse
              industries and helped them transform their digital experiences.
            </p>
          </div>

          {/* === RIGHT COLUMN: Image with Circular Overlay === */}
          <div className="order-1 md:order-2 flex justify-center">
            {/* Container for the image and the circle shape */}
            <img
              src={teamImage}
              alt="A team of professionals collaborating around a table."
              className="w-full h-full object-cover  transition-transform 
            duration-300 
            ease-in-out 
            hover:-translate-x-1 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
