import left from "../../assets/Images/services/Leftcut.png";
import right from "../../assets/Images/services/RightCut.png";
import sdlc from "../../assets/Images/services/SDLCchart.png";
const Developmentphase = () => {
  return (
    <>
    <section className=" w-full pt-5 md:pt-10 flex  items-center justify-between bg-white">
      {/* Left decoration */}
      <div    className="w-15 md:w-50 shrink">
        <img
        src={left}
        alt="left decoration"
        className="w-7 md:w-22"
      />
      </div>
      

      {/* Heading */}
      <h1 className="left-10 text-2xl md:text-6xl font-medium text-red-500 shrink-0">
        Development Phases
      </h1>

      {/* Right decoration */}
      
        <img
        src={right}
        alt="right decoration"
        className="w-15 md:w-50 shrink"
      />
     
      
     
    </section>
     <img src={sdlc} className="mx-auto mb-5 md:mb-30"></img>
     </>
  );
};

export default Developmentphase;
