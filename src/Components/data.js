import {
  Rocket,
  Cloud,
  Code,
  Cpu,
  Tag,
  Search,
  Database,
  Share2,
  Clock,
  Megaphone,
} from "lucide-react";
import council from "../assets/Images/partnerbrand/council.png";
import icrc from "../assets/Images/partnerbrand/ICRC.png";
import prakash from "../assets/Images/partnerbrand/prakash.png";
import sol from "../assets/Images/partnerbrand/sol.png";
import staylearning from "../assets/Images/partnerbrand/staylearning.png";
import iso9001 from '../assets/Images/ISO9001.png'
import iso27001 from '../assets/Images/ISO27001.png'
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

export const features = [
  {
    id: 1,
    icon: Rocket,
    title: "Faster Project Delivery",
    description:
      "We deliver your project at lightning-fast speed without compromising on quality.",
  },
  {
    id: 2,
    icon: Cloud,
    title: "Brainstorming Discussion",
    description:
      "We believe in the power of collaboration to develop innovative solutions that align with your goals, and challenges.",
    highlightWords: ["develop"],
  },
  {
    id: 3,
    icon: Code,
    title: "Neat Coding Structure",
    description:
      "We implement a neat coding structure to enhance the performance and scalability of your web app and mobile app.",
    highlightWords: ["web app", "mobile app"],
  },
  {
    id: 4,
    icon: Cpu,
    title: "Automation and AI",
    description:
      "We implement automation and AI technologies to optimize processes and drive tech innovations.",
  },
];

export const logos = [
  { src: staylearning, alt: "Stay Learning" },
  { src: icrc, alt: "ICRC Resource Centre" },
  { src: prakash, alt: "Prakash" },
  { src: sol, alt: "Solutions" },
  { src: council, alt: "E-MAX" },
];
export const services = [
  {
    icon: Tag,
    title: "Web Development",
    description:
      "We craft dynamic online solutions designed to perfectly match your distinctive needs.",
    highlightWords: [],
  },
  {
    icon: Search,
    title: "Mobile Development",
    description:
      "We conceive, craft, and launch engaging mobile apps for cross-platform user satisfaction.",
    highlightWords: ["mobile apps"],
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "We design robust web apps to streamline and optimize your data management needs.",
    highlightWords: ["web apps"],
  },
  {
    icon: Share2,
    title: "DevOps & Server Management",
    description:
      "We engineer top-tier custom web portals, scaling for businesses of every dimension.",
    highlightWords: ["custom"],
  },
  {
    icon: Clock,
    title: "Virtual Resource Management",
    description:
      "We bolster online visibility and SEO rankings, driving organic traffic and digital presence.",
  },
  {
    icon: Megaphone,
    title: "Digital marketing",
    description:
      "From strategic campaigns to data-driven analytics, our digital marketing solutions are designed to propel your business forward in the ever-evolving online sphere.",
  },
];
export const testimonials = [
    {
      text: "I want to express my gratitude for the excellent service I received. The project was delivered on time as promised, showcasing your team's commitment and professionalism. The quality of work exceeded my expectations. I appreciate your dedication and look forward to future collaborations.",
      name: "Lalit Rawat",
      title: "Sr. IT Executive",
      company: "DTS Travels Pvt ltd"
    },
    {
      text: "LogZero Technology and its team exceeded my expectations. I was impressed by their understanding, communication style, and the excellent quality of their work. The only downside for me is their Saturday-Sunday off policy, which may delay issue resolutions over the weekend. Overall, I am satisfied with their services.",
      name: "Parveen Jangra",
      title: "Founder",
      company: "Homeflex Career"
    },
    {
      text: "I thank you and your team for demonstrating immense patience and genuine interest in creating the website according to the brief and delivering a beautiful product. People like you are an asset to any organization and play a crucial role in its overall success.",
      name: "Daljeet Kataria",
      title: "Co-Founder",
      company: "Golden Creepers Farm Retreat",
      highlightWords: ["website"]
    }
  ];

   export const certifications = [
    {
      id: 1,
      image: iso9001,
      alt: "ISO 9001 Certified",
      title: "ISO 9001",
      subtitle: "Quality Management System"
    },
    {
      id: 2,
      image: iso27001,
      alt: "ISO 27001 Certified",
      title: "ISO 27001",
      subtitle: "Information Security Management"
    }
  ];
  export  const faqData = [
    {
      question: "What mobile platforms do you develop for?",
      answer: "We develop for all major mobile platforms including iOS (iPhone and iPad), Android, and cross-platform solutions. Our team has expertise in native development using Swift for iOS and Kotlin/Java for Android, as well as cross-platform frameworks like React Native and Flutter to maximize code reusability and reduce development costs."
    },
    {
      question: "How do you ensure cross-platform compatibility for mobile apps?",
      answer: "We employ several strategies to ensure cross-platform compatibility: using cross-platform frameworks like React Native or Flutter, maintaining consistent UI/UX design principles across platforms, thorough testing on multiple devices and OS versions, and following platform-specific guidelines while maintaining a unified brand experience."
    },
    {
      question: "Can you develop apps for both smartphones and tablets?",
      answer: "Absolutely! We specialize in creating responsive applications that work seamlessly across all device sizes. Our apps automatically adapt to different screen sizes and orientations, providing an optimal user experience whether on smartphones, tablets, or even foldable devices."
    },
    {
      question: "Do you provide ongoing maintenance and support for mobile apps?",
      answer: "Yes, we offer comprehensive post-launch support including regular updates, bug fixes, performance optimization, security patches, and feature enhancements. Our maintenance packages are tailored to your needs and include monitoring, analytics reporting, and technical support to ensure your app continues to perform at its best."
    },
    {
      question: "What industries do you cater to for mobile app development?",
      answer: "We serve a diverse range of industries including healthcare, fintech, e-commerce, education, entertainment, logistics, real estate, hospitality, and more. Our team adapts to industry-specific requirements, compliance standards, and user expectations to deliver tailored solutions that meet your business objectives."
    },
    {
      question: "What is your process for testing mobile apps?",
      answer: "Our comprehensive testing process includes unit testing, integration testing, UI/UX testing, performance testing, security testing, and device compatibility testing. We use both automated testing tools and manual testing across real devices to ensure your app functions flawlessly before launch."
    },
    {
      question: "Do you provide UI/UX design services for mobile apps?",
      answer: "Yes, we have a dedicated design team that creates intuitive and engaging user interfaces. Our design process includes user research, wireframing, prototyping, visual design, and usability testing. We follow platform-specific design guidelines while maintaining your brand identity throughout the app experience."
    },
    {
      question: "Can you assist with app deployment and App Store optimization?",
      answer: "Absolutely! We handle the entire app deployment process including App Store and Google Play Store submissions, compliance with store guidelines, app store optimization (ASO) for better visibility, and ongoing support for app updates and releases. We also provide guidance on app store marketing strategies."
    },
    {
      question: "Can you integrate third-party APIs and services into mobile apps?",
      answer: "Yes, we have extensive experience integrating various third-party services including payment gateways, social media APIs, cloud services, analytics tools, mapping services, push notification services, and custom APIs. We ensure secure and efficient integration while maintaining app performance and user experience."
    },
    {
      question: "What is your approach to project management and communication during the mobile app development process?",
      answer: "We follow agile development methodologies with regular sprint cycles and milestone reviews. You'll have access to project management tools, receive regular progress updates, and participate in weekly status calls. We maintain transparent communication through dedicated project managers and provide real-time access to development progress."
    },
    {
      question: "What is your approach to mobile app security?",
      answer: "Security is paramount in our development process. We implement multiple layers of protection including data encryption, secure authentication, API security, secure data storage, code obfuscation, and regular security audits. We follow OWASP mobile security guidelines and ensure compliance with relevant data protection regulations."
    },
    {
      question: "Can you provide examples of successful mobile app projects you have completed in the past?",
      answer: "We've successfully delivered over 200+ mobile applications across various industries. Our portfolio includes award-winning e-commerce apps with millions of users, healthcare apps with HIPAA compliance, fintech applications with bank-level security, and educational platforms used by thousands of students. We'd be happy to share relevant case studies that align with your project requirements."
    }
  ];

export default categories;
