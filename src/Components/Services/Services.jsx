import React from 'react'
import aboutimage from "../../assets/Images/services/service-page-banner.png";
import Writeup from './Writeup';
import Ourservices from './Ourservices';
import Developmentphase from './Developmentphase';
const Services = () => {
  return (
   <>
    <section>
        <img
          src={aboutimage}
          className="w-screen h-auto"
          alt="Aboutusbanner"
        ></img>
        <Writeup></Writeup>
        <Ourservices></Ourservices>
        <Developmentphase></Developmentphase>
      </section>
   </>
  )
}

export default Services