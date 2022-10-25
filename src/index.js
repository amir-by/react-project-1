import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import Home from './pages/Home';
 import Html from './pages/Html';
 import Css from './pages/Css';
 import JavaScript from './pages/JavaScript';
 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>SORRY.......</h1>
  },
  {
    path: "/html",
    element: <Html/>,
  },
  {
    path: "/css",
    element: <Css/>,
  },
  {
    path: "/javascript",
    element: <JavaScript/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
  <RouterProvider router={router} />
  </React.StrictMode>
);

 