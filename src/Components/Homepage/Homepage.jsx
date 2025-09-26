import HeroSection from "./HeroSection";
import ITSection from "./ITsection";
import PartnerwithUS from "./PartnerwithUS";
import TestimonialsCarousel from "./ReviewCrousol";
import AwardsCertifications from "./AwardsCertifications";
import ServicesGrid from "./Servicegrid";
import TestimonialSection from "./TestmonialSections";
import Whychooseus from "./Whychooseus";
import LazySection from "../Layout/LazySection";
const Homepage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <LazySection>
        <PartnerwithUS></PartnerwithUS>
      </LazySection>
      <LazySection>
        <Whychooseus></Whychooseus>
      </LazySection>
      <LazySection>
        <ITSection></ITSection>
      </LazySection>
      <LazySection>
        <ServicesGrid></ServicesGrid>
      </LazySection>
      <LazySection>
        <TestimonialSection></TestimonialSection>
      </LazySection>
      <LazySection>
        <AwardsCertifications></AwardsCertifications>
      </LazySection>
      <LazySection>
        <TestimonialsCarousel></TestimonialsCarousel>
      </LazySection>
    </>
  );
};

export default Homepage;
