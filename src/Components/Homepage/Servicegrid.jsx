import { FeatureCard } from "./Featurecard";
import { services } from "../data";
import {Link} from 'react-router'
const ServicesGrid = () => {
 
  return (
    <div className="min-h-screen bg-[#0b0c0f] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          OUR SERVICES
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20 ">
          {services.map((service, index) => (
            <FeatureCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              highlightWords={service.highlightWords || []}
              color='#96a6a2'
            />
          ))}
        </div>
        <div className="flex justify-center mt-12">
             <Link to='/services'>
          <button className="bg-[#191b1b]  hover:px-6  text-white px-5 py-2 rounded-3xl transition-all duration-300 flex items-center gap-2 font-medium cursor-pointer">
            More 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;