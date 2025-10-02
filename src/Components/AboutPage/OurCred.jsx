import AIicon from "../../assets/Images/AboutPage/AI.png";
import discount from "../../assets/Images/AboutPage/discount.png";
import tool from "../../assets/Images/AboutPage/tool.png";
import star from "../../assets/Images/AboutPage/star.png";
import bicon from "../../assets/Images/AboutPage/bicon.png";
import ISOCert from "../../assets/Images/AboutPage/ISOCert.png";
import backgroundpng from '../../assets/Images/AboutPage/About2BG.png'

const CredentialsSection = () => {
  const credentials = [
    {
      icon: ISOCert,
      text: "We are ISO certified, ensuring quality and reliability in our services.",
    },
    {
      icon: bicon,
      text: "At NexusIT, we utilize multiple cutting-edge technologies tailored to various industries.",
    },
    {
      icon: star,
      text: "Client satisfaction is our priority and driving force.",
    },
    {
      icon: tool,
      text: "With NexusIT, you're guided by a dedicated team of industry experts.",
    },
    {
      icon: discount,
      text: "We offer a wide range of services across diverse industries.",
    },
    {
      icon: AIicon,
      text: "NexusIT is internationally recognized for its expertise in AI and innovative technologies.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-24" style={{ backgroundImage: `url(${backgroundpng})` }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white mx-2 md:mx-30">Our Credentials</h2>
        <p className="mb-12 text-gray-400 max-w-2xl mx-2 md:mx-30">
          At NexusIT Technologies, our credentials demonstrate expertise and
          commitment to excellence. With a track record of exceptional software
          solutions, we tailor services to meet diverse client needs, ensuring
          projects are in capable hands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 md:mx-30">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="flex items-center p-2 bg-[#161515] rounded-lg shadow-lg hover:bg-black"
            >
              <img
                src={credential.icon}
                className="h-25 w-25 object-contain mr-4"
                alt="icons"
              />
              <p className="text-lg text-gray-300 self-center">
                {credential.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredentialsSection;
