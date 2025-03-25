import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Nav.jsx'
import Home from './Home.jsx'
import Dashboard from './Dashboard.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path:'/home',
    element: <Home></Home>
  },
  {
    path: '/dashboard',
    element:<Dashboard></Dashboard>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
