import { motion } from "framer-motion";

const DropdownMenu = ({ isMobile = false }) =>{
  // Single source of truth for categories + services
  const categories = [
    {
      title: "Web Development",
      services: [
        "CRM / ERP",
        "E-Commerce And Retail",
        "Marketplace Management",
        "SaaS",
        "On-Demand Application",
        "Digital Transformation",
      ],
    },
    {
      title: "Mobile Development",
      services: [
        "Custom Apps",
        "Native Apps",
        "Hybrid Apps",
        "App Testing",
        "Integration",
        "UI / UX",
        "UI / UX Design",
        "Custom IOS App",
        "Development",
        "Software Testing",
      ],
    },
    {
      title: "Data Management",
      services: [
        "Data Collection",
        "Data Mining",
        "Data Analysis",
        "Dashboard Management",
      ],
    },
    {
      title: "DevOps And Server Management",
      services: [
        "DevOps",
        "Managed Server",
        "Cloud Server",
        "Windows Server",
        "Linux Server",
      ],
    },
    {
      title: "Virtual Resource Management",
      services: [
        "Project Manager",
        "Project Coordinator",
        "Business Analyst",
        "Business Development Executive",
        "Marketing Executive",
        "Relationship Manager",
      ],
    },
    {
      title: "Digital Marketing Services",
      services: [
        "SEO",
        "Content Marketing",
        "Social Media Marketing",
        "Email Marketing",
        "PPC Campaigns",
        "Brand Strategy",
      ],
    },
  ];

  return (
    <div className={`${isMobile ? "bg-gray-50 p-4" : "bg-white border-t border-gray-200 shadow-lg"}`}>
      <div className="max-w-7xl mx-auto p-8">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm text-gray-700`}>
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-[15px] font-extrabold text-black mb-3">{category.title}</h4>
              <ul role="menu" className="space-y-2">
                {category.services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      role="menuitem"
                      className="cursor-pointer block hover:text-blue-600 transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
