import building from '../../assets/Images/AboutPage/building.png'
import backgroundpng from '../../assets/Images/AboutPage/About2BG.png'
const UsSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-24" style={{ backgroundImage: `url(${backgroundpng})` }}>
       <h2 className="text-4xl font-bold mb-6 text-white text-center">About Us</h2>
      <div className="flex flex-col lg:flex-row lg:space-x-5 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
         
          <p className="mb-4 text-gray-400">
            At NexusIT Technologies, we extend our global IT services to empower
            small and medium businesses across the digital landscape. Renowned
            for delivering exceptional custom software development solutions, we
            are a team of dedicated professionals united by a common mission: to
            provide innovative and transformative web solutions on a worldwide
            scale.
          </p>
          <p className="mb-4 font-semibold text-white">
            NexusIT Technologies believes in connecting businesses and bridging
            continents together!
          </p>
          <p className="mb-4 text-gray-400">
            Our expertise lies in crafting bespoke solutions meticulously aligned
            with your business objectives, yielding tangible and measurable
            outcomes. Partner with NexusIT Technologies to embark on a journey
            of exploration and harness the capabilities of our highly skilled
            development team.
          </p>
          <p className="text-gray-400">
            If you seek premium custom software development services,
            irrespective of your location, we are here to meet your
            requirements, with NexusIT Technologies, trust that your vision is
            our innovation, yielding worldwide results without hesitation!
          </p>
        </div>

        {/* Image Gallery */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main Image */}
            <img
              src={building}
              alt="Building exterior"
                className="w-120 h-auto object-cover"
             
            />
        
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsSection