import EarthImage from '../../assets/Images/EarthImage.png'
import {Link} from 'react-router'
import Featurecardgrid from './Featurecard'
const HeroSection = () => {
  return (<>
    <section className="bg-black text-white h-4/7 flex flex-col ">
      <div className="max-w-[1400px] mx-auto w-full px-6">
        
        {/* Left Content */}
        <div className="pt-60">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug font-Merriweather">
            MOST RESPONSIVE & <br /> INNOVATIVE IT <br /> SOLUTIONS FOR <br /> BUSINESSES
          </h1>
          <Link to='/get-in-touch'>
          <button className="bg-gradient-to-r from-[#49eec3] to-[#2bb892] text-black font-semibold px-6 py-3 rounded-lg shadow-md w-fit hover:opacity-90 transition cursor-pointer">
            Contact us
          </button>
          </Link>
        </div>

        {/* Right Content (Earth Image) */}
        <div className=" hidden md:block z-0">
          <img
            src={EarthImage}
            alt="Earth"
            className=" absolute left-185 -top-17 w-4xl  "
          />
        </div>
        
      </div>
     <div className="mt-25 px-6 pb-20 pt-10 md:px-12 ">
          <Featurecardgrid />
        </div>
    </section>
    
     </>
  )
}

export default HeroSection