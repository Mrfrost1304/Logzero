import { certifications } from "../data";

const AwardsCertifications = () => {

  return (
    <div className="bg-black flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-20 tracking-wider">
          AWARDS & CERTIFICATIONS
        </h1>

        {/* Certification Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-32">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
            >
              {/* Badge Image */}
              <div className="relative">
                <img 
                  src={cert.image}
                  alt={cert.alt}
                  className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain mx-auto drop-shadow-2xl"
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>

              {/* Optional text below badges (uncomment if needed) */}
              
              {/* <div className="mt-6">
                <h3 className="text-emerald-400 text-xl font-semibold">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {cert.subtitle}
                </p>
              </div> */}
             
            </div>
          ))}
        </div>

        {/* Optional description text */}
        {/* <div className="mt-16 max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            Our commitment to excellence is validated through internationally recognized 
            certifications that demonstrate our dedication to quality and security standards.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AwardsCertifications;