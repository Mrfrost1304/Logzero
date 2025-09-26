import React from "react";

const SuccessStories = () => {
  return (
    <section className="w-full bg-black flex justify-center items-center pt-25 pb-10 px-6 text-center ">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white    transition-transform 
            duration-300 
            ease-in-out 
            hover:translate-x-1 ">
        SUCCESS STORIES: <br />
        EMPOWERING LEADING <br />
        <span className="text-transparent font-extrabold tracking-wide"
          style={{
            WebkitTextStroke: "2px #34d399", // teal-400 outline
            color: "transparent"
          }}
        >
          BRANDS FOR GROWTH
        </span>
      </h2>
    </section>
  );
};

export default SuccessStories;
