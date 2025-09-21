import leaves from '../../assets/Images/FeatherImage.png'
import { testimonials } from '../data';
import { highlightText } from '../utils';
const TestimonialSection = () => {
  

  return (
    
    <div className="relative bg-[#0b0c0f] flex items-center justify-center pb-15 px-4 overflow-hidden">
      {/* Left decorative leaves */}
      <div className="absolute right-0 top-95  transform -translate-y-1/2 -translate-x-4 opacity-60">
        <img 
          src={leaves}
          alt="Decorative leaves"
          className="w-64 h-auto object-contain md:block hidden"
        />
      </div>

      {/* Right decorative leaves */}
      <div className="absolute left-0 top-95 transform -translate-y-1/2 translate-x-4 opacity-60">
        <img 
          src={leaves} 
          alt="Decorative leaves"
          className="w-64 h-auto object-contain transform scale-x-[-1] md:block hidden"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mt-16 mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
            Don't take our word for it.
          </h2>
          <h1 className="text-[#49eec3] text-4xl md:text-6xl font-bold">
            Hear from our users
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <div  key={index}>
            <div 
             
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-3 w-80 h-50 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
             {highlightText(testimonial.text, testimonial.highlightWords || [])}
              </p>
              
              
            </div>
            <div className=" w-80 text-center pt-2">
                <h3 className="text-white font-semibold text-sm mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-white text-sm font-medium mb-1">
                  {testimonial.title}
                </p>
                <p className="text-white text-sm">
                  {testimonial.company}
                  
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;