import people from '../../assets/Images/AboutPage/AboutPeople.png'
const CultureSection = () => {
  return (
    <div className="bg-[#1a1c1c] text-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Text Content and Button */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Culture</h2>
          <p className="mb-8 text-gray-400">
            At NexusIT Technologies, our culture embodies collaboration, innovation, and excellence. We foster an inclusive environment where every team member is valued and empowered to bring their unique perspective. Transparency, open communication, and a shared mission drive our dynamic workplace. We celebrate achievements, prioritize personal and professional growth, and uphold integrity in all endeavors. Join us to be a part of a team that thrives on creativity, collaboration, and making a meaningful impact in the digital landscape.
          </p>
          <button className="bg-teal-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            Join us
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
    
            <img 
              src={people}
              alt="Professional team collaborating on a project"
              className=" h-96 w-auto object-cover" 
            />
      
        </div>
      </div>
    </div>
  );
};

export default CultureSection;