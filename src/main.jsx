import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Root from './routes/Root.jsx'
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import './index.css'


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  }, {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Root />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
