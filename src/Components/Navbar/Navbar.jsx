import BrandLogo from "../../assets/Images/BrandLogo.png";
import AnimationDropdown from "./AnimationDrop";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import useScrollDirection from "./ScrollHook";

const Navbar = () => {
  const { scrollDirection, isAtTop } = useScrollDirection();

  return (
    <nav
      className={`
        text-white w-full h-fit py-4 px-10 z-50 fixed top-0 left-0 transition-all duration-300 ease-in-out
        ${scrollDirection === "down" 
          ? "-translate-y-full" 
          : isAtTop 
            ? "translate-y-0" 
            : "translate-y-0 bg-black backdrop-blur-md shadow-lg"
        }
      `}
    >
      <div className="max-w-[1520px] mx-auto grid grid-cols-20 items-center h-full">
        {/* Logo (15%) */}
        <div className="col-span-3 flex flex-col">
          <img
            src={BrandLogo}
            alt="Logo"
            className="lg:h-7 lg:w-30 h-5 w-[80px]"
          />
          <p className="lg:text-[10px] text-[7px] text-red-500 w-30 lg:w-50">
            DRIVING STANDARDS TO EXCELLENCE
          </p>
        </div>

        {/* Menu Links (75%) - Hidden on mobile */}
        <div className="xl:col-span-15 col-span-11 hidden md:block">
          <ul className="flex justify-end space-x-8 text-sm font-medium xl:mr-15">
            <li>
              <a href="#" className="hover:text-gray-300 hover:border-b-2 pb-1 hover:border-red-600 ">
                About Us
              </a>
            </li>
            <li >
              <AnimationDropdown
                label="Services"
                menuClassName="fixed left-1/2 transform -translate-x-1/2 mt-7 w-screen bg-white shadow-lg border-t border-gray-200 z-50 "
              >
                <DropdownMenu />
              </AnimationDropdown>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 hover:border-b-2 pb-1 hover:border-red-600">
                Clients
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 hover:underline-offset-8 hover:border-b-2 pb-1 hover:border-red-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 hover:border-b-2 pb-1 hover:border-red-600">
                Case-Studies
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="xl:col-span-2 md:col-span-6 col-span-17 flex justify-end items-center space-x-4">
          {/* Desktop CTA - Hidden on mobile */}
          <a
            href="#"
            className="hidden md:block bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
          >
            Get in touch
          </a>

          {/* Mobile Menu Component */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;