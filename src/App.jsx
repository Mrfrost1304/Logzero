import { Outlet } from "react-router";
import { lazy, Suspense, useEffect } from "react";
const Navbar = lazy(() => import("./Components/Layout/Navbar/Navbar"));
const FAQSection = lazy(() => import("./Components/Layout/FAQsection"));
const Footer = lazy(() => import("./Components/Layout/Footer"));
// Note: filename intentionally contains a trailing space before extension
const ChatWidget = lazy(() => import("./Components/Layout/ChatWidget "));
import { useLocation } from "react-router";
const App = () => {
  return (
    <>
    <ScrollToTop></ScrollToTop>
      <Suspense fallback={<div />}> 
        <Navbar />
      </Suspense>
      <Outlet />
      <Suspense fallback={<div />}> 
        <FAQSection />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Footer />
      </Suspense>
      <Suspense fallback={null}> 
        <ChatWidget />
      </Suspense>
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
