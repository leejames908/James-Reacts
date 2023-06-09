import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './routes/About';
import reportWebVitals from './reportWebVitals';
import './scss/custom.scss';
import Home from './routes/Home';
import Illustration from './routes/Illustration';
import BackgroundDesign from './routes/BackgroundDesign.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';

const router = createBrowserRouter(
 [
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "illustration",
        element: <Illustration/>,
      },
      {
        path: "backgroundDesign",
        element: <BackgroundDesign/>
      },
    ],
  },
], { basename: "/James-Reacts" });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
