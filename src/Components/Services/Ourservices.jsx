import { Code, Smartphone, Database, Server, BarChart } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Code className="w-12 h-12 text-green-400" />,
    title: "Web Development",
    description:
      "We craft dynamic online solutions designed to perfectly match your distinctive needs.",
    link: "#",
  },
  {
    id: 2,
    icon: <Smartphone className="w-12 h-12 text-green-400" />,
    title: "Mobile Development",
    description:
      "We conceive, craft, and launch engaging mobile apps for cross-platform user satisfaction.",
    link: "#",
  },
  {
    id: 3,
    icon: <Database className="w-12 h-12 text-green-400" />,
    title: "Data Management",
    description:
      "We design robust web apps to streamline and optimize your data management needs.",
    link: "#",
  },
  {
    id: 4,
    icon: <Server className="w-12 h-12 text-green-400" />,
    title: "DevOps & Server Management",
    description:
      "We engineer top-tier custom web portals, scaling for businesses of every dimension.",
    link: "#",
  },
  {
    id: 5,
    icon: <BarChart className="w-12 h-12 text-green-400" />,
    title: "Virtual Resource Management",
    description:
      "We bolster online visibility and SEO rankings, driving organic traffic and digital presence.",
    link: "#",
  },
];

const Ourservices = () => {
  return (
    <section className="bg-black text-white py-16 px-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-red-500 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 borter border-gray-800">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="border border-gray-800 p-6 flex flex-col items-center text-center "
            >
              {service.icon}
              <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
              <p className="text-sm text-gray-300 mt-2">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-red-500 text-sm mt-4 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-0  md:px-44">
          {services.slice(3, 5).map((service) => (
            <div
              key={service.id}
              className="border border-gray-800 p-6 flex flex-col items-center text-center w-full md:w-auto"
            >
              {service.icon}
              <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
              <p className="text-sm text-gray-300 mt-2">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-red-500 text-sm mt-4 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
};

export default Ourservices;
