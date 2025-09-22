import { Outlet } from "react-router";
import ChatWidget from "./Components/Layout/ChatWidget ";
import FAQSection from "./Components/Layout/FAQsection";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FAQSection></FAQSection>
      <Footer></Footer>
      <ChatWidget></ChatWidget>
    </>
  );
};

export default App;
