import React from "react";
import crt from '../../assets/Images/contactimg.png'
const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-60">
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 ">
        {/* Left Side - Contact Info */}
        <div className="">
          <h2 className="text-3xl font-bold text-black">
            CONTACT <span className="text-red-600">US</span>
          </h2>
          <p className="mt-4 text-gray-700">
            Ready to take your digital presence to the next level? <br />
            We’re waiting to hear about your project and ideas. <br />
            Contact us for your “IT consulting and services’ needs”.
          </p>

          <h3 className="mt-8 text-2xl font-bold text-black">
            OUR <span className="text-red-600">PRESENCE</span>
          </h3>

          <div className="mt-6">
            <h4 className="text-green-600 font-semibold">
              India Corporate (Head office)
            </h4>
            <p>
              <strong>Address:</strong> Pegasus Tower, A-10, 8th Floor,
              Sector-68, Gautam Buddha Nagar, Noida, Uttar Pradesh, 201301
            </p>
            <p>
              <strong>Phone:</strong> +91 8009676899
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nexsusitofficial@gmail.com"
                
                className="text-blue-600 underline"
              >
                 nexsusitofficial@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-green-600 font-semibold">
              India Corporate (New Delhi)
            </h4>
            <p>
              <strong>Address:</strong> 7th Floor, DPT-703, Prime Tower, Okhla,
              Phase-I, New Delhi, South East Delhi, Delhi, 110020
            </p>
            <p>
              <strong>Phone:</strong> +91 8009676899
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nexsusitofficial@gmail.com"
                
                
                className="text-blue-600 underline"
              >
                nexsusitofficial@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-md p-8 rounded-lg">
        <div className="flex items-center gap-2 mb-6">
        <img src={crt} alt="crt" className="w-20 h-20" />
          <h2 className="text-3xl font-bold text-black ">
     
            MEET <span className="text-red-600">WITH US</span>
          </h2>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border  px-4 py-2 rounded focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border  px-4 py-2 rounded focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Id"
                className="w-full border  px-4 py-2 rounded focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Phone No"
                className="w-full border  px-4 py-2 rounded focus:ring-2 focus:ring-red-500"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-red-500"
            ></textarea>

            {/* Placeholder for reCAPTCHA */}
            <div className=" p-4 rounded text-sm">
             
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition"
            >
              Hire Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
