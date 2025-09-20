import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import DropdownMenu from "./DropdownMenu";

const MobileMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const handleNavClick = (item) => {
    console.log(`Navigating to: ${item}`);
    closeMobileMenu();
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        className="p-2 -m-2 rounded-md hover:bg-gray-100 "
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Dropdown Menu */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{ top: '64px' }} // Adjust this value to clear your header
        >
          <nav role="menu" className=" bg-white">
            <div className="divide-y divide-gray-200">
              <NavItem
                label="About Us"
                onClick={() => handleNavClick("About Us")}
              />

              <CollapsibleNavItem
                label="Services"
                isOpen={servicesOpen}
                toggle={() => setServicesOpen(!servicesOpen)}
              >
                <DropdownMenu isMobile={true} />
              </CollapsibleNavItem>

              <NavItem
                label="Clients"
                onClick={() => handleNavClick("Clients")}
              />
              <NavItem label="Blog" onClick={() => handleNavClick("Blog")} />
              <NavItem
                label="Case Studies"
                onClick={() => handleNavClick("Case Studies")}
              />
            </div>

            {/* CTA Button */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <button
                onClick={() => handleNavClick("Contact")}
                className="w-full bg-red-600 hover:bg-red-700 focus:bg-red-700 px-4 py-3 rounded-md font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Get in touch
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
const NavItem = ({ label, onClick }) => (
  <li>
    <button
      role="menuitem"
      className="w-full text-left px-6 py-4 text-lg font-medium text-gray-900  active:bg-red-600 transition-colors focus:bg-red-600 focus:text-white"
      onClick={onClick}
    >
      {label}
    </button>
  </li>
);

const CollapsibleNavItem = ({ label, isOpen, toggle, children }) => (
  <li>
    <button
      className={`w-full flex justify-between items-center px-6 py-4 text-lg font-medium transition-all duration-200 focus:outline-none ${
        isOpen
          ? "bg-red-600 text-white"
          : "text-gray-900 hover:bg-gray-50 focus:bg-gray-50"
      }`}
      onClick={toggle}
      aria-expanded={isOpen}
      aria-controls={`${label.toLowerCase()}-submenu`}
    >
      <span>{label}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 ml-2" />
      ) : (
        <ChevronDown className="w-5 h-5 ml-2" />
      )}
    </button>

    <div
      id={`${label.toLowerCase()}-submenu`}
      role="region"
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[40vh] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-gray-50 px-4 py-3 overflow-y-auto max-h-[40vh]">
        {children}
      </div>
    </div>
  </li>
);
export default MobileMenu;