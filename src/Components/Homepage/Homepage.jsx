import HeroSection from "./HeroSection";
import ITSection from "./ITsection";
import PartnerwithUS from "./PartnerwithUS";
import TestimonialsCarousel from "./ReviewCrousol";
import AwardsCertifications from "./AwardsCertifications";
import ServicesGrid from "./Servicegrid";
import TestimonialSection from "./TestmonialSections";
import Whychooseus from "./Whychooseus";
const Homepage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <PartnerwithUS></PartnerwithUS>
      <Whychooseus></Whychooseus>
      <ITSection></ITSection>
      <ServicesGrid></ServicesGrid>
      <TestimonialSection></TestimonialSection>
      <AwardsCertifications></AwardsCertifications>
      <TestimonialsCarousel></TestimonialsCarousel>
    </>
  );
};

export default Homepage;
