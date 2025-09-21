import ChatWidget from "./Components/ChatWidget ";
import AwardsCertifications from "./Components/Homepage/AwardsCertifications";
import FAQSection from "./Components/Homepage/FAQsection";
import Footer from "./Components/Homepage/Footer";
import HeroSection from "./Components/Homepage/HeroSection";
import ITSection from "./Components/Homepage/ITsection";
import PartnerwithUS from "./Components/Homepage/PartnerwithUS";
import TestimonialsCarousel from "./Components/Homepage/ReviewCrousol";

import ServicesGrid from "./Components/Homepage/Servicegrid";
import TestimonialSection from "./Components/Homepage/TestmonialSections";
import Whychooseus from "./Components/Homepage/Whychooseus";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <PartnerwithUS></PartnerwithUS>
      <Whychooseus></Whychooseus>
      <ITSection></ITSection>
      <ServicesGrid></ServicesGrid>
      <TestimonialSection></TestimonialSection>
      <AwardsCertifications></AwardsCertifications>
    <TestimonialsCarousel></TestimonialsCarousel>
    <FAQSection></FAQSection>
    <Footer></Footer>
      <ChatWidget></ChatWidget>
    </>
  );
};

export default App;
