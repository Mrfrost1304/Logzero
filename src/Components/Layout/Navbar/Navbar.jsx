import { NavLink } from "react-router";

import AnimationDropdown from "./AnimationDrop";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import useScrollDirection from "../Hooks/ScrollHook";
import n150Webp from "../../../assets/Images/n.png?format=webp&width=200";
import n150Png from "../../../assets/Images/n.png?width=200";
const Navbar = () => {
 

  // Menu items array
  const menuItems = [
    { label: "About Us", path: "/about" },
    {
      label: "Services",
      path: "/services",
      isDropdown: true, // flag for dropdown
    },
    { label: "Clients", path: "/clients" },
    { label: "Blog", path: "/blog" },
    { label: "Case-Studies", path: "/case-studies" },
  ];

  return (
    <nav
      className={`
        text-white w-full h-fit py-4 px-10 z-50 fixed top-0 left-0 transition-all duration-300 ease-in-out hover:bg-black
       bg-black
      `}
    >
      <div className="max-w-[1520px] mx-auto grid grid-cols-20 items-center h-full">
        {/* Logo (15%) */}
        <div className="col-span-3 flex flex-col w-80">
          <NavLink to="/">
           
           <h1 className="text-2xl lg:text-3xl font-bold w-80">NEXUS IT SOLUTIONS</h1>
            
          </NavLink>
        </div>

        {/* Menu NavLinks (75%) - Hidden on mobile */}
        <div className="xl:col-span-15 col-span-11 hidden md:block">
          <ul className="flex justify-end space-x-8 text-sm font-medium xl:mr-15">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 pb-1 border-red-600 text-white hover:text-gray-300"
                      : "text-white hover:text-gray-300 hover:border-b-2 pb-1 hover:border-red-600"
                  }
                >
                  {item.isDropdown ? (
                    <AnimationDropdown
                      label={item.label}
                      menuClassName="fixed left-1/2 transform -translate-x-1/2 mt-7 w-screen bg-white shadow-lg border-t border-gray-200 z-50 "
                    >
                      <DropdownMenu />
                    </AnimationDropdown>
                  ) : (
                    item.label
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="xl:col-span-2 md:col-span-6 col-span-17 flex justify-end items-center space-x-4">
          {/* Desktop CTA - Hidden on mobile */}
          <NavLink
            to="/get-in-touch"
            className={({ isActive }) =>
              isActive
                ? " hidden md:block bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
                : "hidden md:block bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
            }
          >
            Get in touch
          </NavLink>

          {/* Mobile Menu Component */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
