import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Components/Landingpage.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';



const router = createBrowserRouter([

  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/landingPage",
    element: <LandingPage />
  },
  {
    path: "/app",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
