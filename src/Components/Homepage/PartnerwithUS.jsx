import { logos } from "../data";

const PartnerwithUS = () => {
  return (
    <section className="bg-[#141714] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          PEOPLE THAT TRUST US
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4 justify-items-center ">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl shadow-lg flex items-center justify-center 
              /* laptop & up */
              "
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerwithUS;
