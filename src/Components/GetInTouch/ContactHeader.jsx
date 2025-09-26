import React from "react";

const ContactHeader = () => {
  return (
    <div className="w-full bg-black flex justify-center items-center py-40 ">
      <h1 className="text-5xl font-bold text-white">
        CONTACT{" "}
        <span
          className="text-teal-400"
          style={{
            WebkitTextStroke: "10px #34d399", 
            color: "transparent",
           
          }}
        >
          US
        </span>
      </h1>
    </div>
  );
};

export default ContactHeader;
