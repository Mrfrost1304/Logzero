import { Outlet } from "react-router";
import ChatWidget from "./Components/Layout/ChatWidget ";
import FAQSection from "./Components/Layout/FAQsection";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router";
const App = () => {
  return (
    <>
    <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FAQSection></FAQSection>
      <Footer></Footer>
      <ChatWidget></ChatWidget>
    </>
  );
};
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
