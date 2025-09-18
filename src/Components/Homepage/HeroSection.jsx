import React from 'react'
import EarthImage from '../../assets/Images/EarthImage.png'
const HeroSection = () => {
  return (
    <section className="bg-black text-white h-screen flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug font-Merriweather">
            MOST RESPONSIVE & <br /> INNOVATIVE IT <br /> SOLUTIONS FOR <br /> BUSINESSES
          </h1>
          <button className="bg-gradient-to-r from-green-300 to-green-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md w-fit hover:opacity-90 transition">
            Contact us
          </button>
        </div>

        {/* Right Content (Earth Image) */}
        <div className="hidden md:block">
          <img
            src={EarthImage}
            alt="Earth"
            className=" absolute left-185 -top-17 w-4xl  "
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection