import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Abouthome from './Components/AboutPage/Abouthome.jsx';
import Homepage from './Components/Homepage/Homepage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,children:[
         {path:"/",element:<Homepage></Homepage>},
      {path:"/about",element:<Abouthome></Abouthome>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,
  </StrictMode>,
)
