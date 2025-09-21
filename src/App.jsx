import HeroSection from "./Components/Homepage/HeroSection";
import ITSection from "./Components/Homepage/ITsection";
import PartnerwithUS from "./Components/Homepage/PartnerwithUS";
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
    </>
  );
};

export default App;
