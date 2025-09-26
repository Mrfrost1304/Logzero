import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './Components/Homepage/Homepage.jsx'

const Abouthome = lazy(() => import("./Components/AboutPage/Abouthome.jsx"));
const Clients = lazy(() => import("./Components/clients/Clients.jsx"));
const CaseStudies = lazy(() => import("./Components/caseStudies/CaseStudies.jsx"));
const Blog = lazy(() => import("./Components/blog/Blog.jsx"));
const Services = lazy(() => import("./Components/Services/Services.jsx"));
const GetInTouch = lazy(() => import("./Components/GetInTouch/GetInTouch.jsx"));

// ✅ Wrap elements in Suspense fallback
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
       <Homepage></Homepage>
        
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div className="px-50 text-amber-50 py-50 bg-black">Loading...</div>}>
            <Abouthome />
          </Suspense>
        ),
      },
      {
        path: "clients",
        element: (
          <Suspense fallback={<div className="px-50 text-amber-50 py-50 bg-black">Loading...</div>}>
            <Clients />
          </Suspense>
        ),
      },
      {
        path: "case-studies",
        element: (
          <Suspense fallback={<div className="px-50 text-amber-50 py-50 bg-black">Loading...</div>}>
            <CaseStudies />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<div className="px-50 text-amber-50 py-50 bg-black">Loading...</div>}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<div className="px-50 text-amber-50 py-50 bg-black">Loading...</div>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "get-in-touch",
        element: (
          <Suspense fallback={<div className="px-50 text-amber-50 py-50 bg-black">Loading...</div>}>
            <GetInTouch />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
