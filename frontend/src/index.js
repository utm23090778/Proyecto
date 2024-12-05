import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Charts from './Charts';

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/charts",
    element: <Charts />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// Medición de rendimiento (opcional)
reportWebVitals();

