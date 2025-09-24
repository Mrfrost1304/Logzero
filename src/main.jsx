import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Abouthome from "./Components/AboutPage/Abouthome.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Clients from "./Components/clients/Clients.jsx";
import CaseStudies from "./Components/caseStudies/CaseStudies.jsx";
import Blog from "./Components/blog/Blog.jsx";
import Services from "./Components/Services/Services.jsx";
import GetInTouch from "./Components/GetInTouch/GetInTouch.jsx";

const router = createBrowserRouter([
  {
 
    element: <App />,
    children: [
      { path: "/", element: <Homepage></Homepage> },
      { path: "about", element: <Abouthome></Abouthome> },
      { path: "clients", element: <Clients></Clients> },
      { path: "case-studies", element: <CaseStudies></CaseStudies> },
      { path: "blog", element: <Blog></Blog> },
      { path: "services", element: <Services></Services> },
      {path:"get-in-touch", element:<GetInTouch></GetInTouch>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
