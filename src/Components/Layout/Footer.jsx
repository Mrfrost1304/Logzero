import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="relative footer-bg text-white py-10  overflow-hidden">
        <div className="relative z-10 flex flex-col items-start max-w-screen-xl mx-4">
          <h2 className="text-[#49eec3] text-3xl md:text-4xl font-normal  uppercase">
            DROP US A LINE
          </h2>

          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-[#49eec3] text-xl font-normal mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Data Management</li>
                <li>DevOps & Server Management</li>
                <li>Virtual Resource Management</li>
              </ul>
            </div>

            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-[#49eec3] text-xl font-normal mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>Who we are</li>
                <li>Our Services</li>
                <li>Our Clients</li>
                <li>Our Privacy Policy</li>
                <li>Partnership with Blacksmith Agency</li>
              </ul>
            </div>

            <div className="md:w-1/3">
              <h3 className="text-[#49eec3] text-xl font-normal mb-4">
                Contact Us
              </h3>
              {/* Add contact info here if needed */}
            </div>
          </div>
        </div>

        {/* Background shapes */}
        <div className="absolute bottom-0 right-0 h-full w-full pointer-events-none z-0">
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-[#ff5757] opacity-60"></div>
          <div className="absolute bottom-10 right-1/4 transform translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-[#49eec3] opacity-60"></div>
          <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-48 h-48 rounded-full bg-gray-500 opacity-60"></div>
        </div>
      </footer>
      <div className="bg-white text-black py-4 border-t border-gray-300">
        <div className="max-w-7xl md:mx-70 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row mx-auto justify-between items-center text-sm md:text-base">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <p className="font-normal">Copyright © 2024</p>
              <p className="font-semibold">LogZero Technologies</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-normal">India Corporate (Head office)</p>
              <p className="font-semibold">+91 11 40789940</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-normal">E-mail</p>
              <p className="font-semibold">sales@logzerotechnologies.com</p>
            </div>
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex space-x-2">
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-blue-900 text-white hover:opacity-80 transition-opacity"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-blue-400 text-white hover:opacity-80 transition-opacity"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-blue-700 text-white hover:opacity-80 transition-opacity"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
