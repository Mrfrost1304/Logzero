import ITImage from "../../assets/Images/IT.png";

const ITSection = () => {
  return (
    <section className="bg-[#111] text-white h-2/6 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="order-2 md:order-1 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Advanced IT Problem Solving
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Empowering tech progress, one solution at a time.
          </p>

          {/* Divider */}
          <hr className="border-gray-600 mb-6 w-3/4" />

          <p className="text-gray-400 mb-8 leading-relaxed">
            Dive into our tech ecosystem and unlock the potential to
            revolutionize your approach to problem-solving, driving forward
            progress with each solution we provide.
          </p>

          {/* Button */}
          <button className="bg-[#49eec3] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#3fd6ae] transition">
            Contact us
          </button>
        </div>

        {/* Right Content (Image with angled border) */}
        <div className="relative flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative ">
            <img
              src={ITImage}
              alt="IT"
              className=" w-[300px] sm:w-[350px] md:w-[400px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSection;
