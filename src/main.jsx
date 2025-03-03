import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogIn from './components/Login/Login.jsx'
import Astros from './components/Astros/Astros.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

// router y CreateBrowserRouter
const router = createBrowserRouter([
  {
    path: '/', element: <App />
  },

  {
    path: 'login', element: <LogIn />    
  },

  {
    path: 'astros-api', element: <Astros />
  },

  {
    path: '*', element: <NotFound />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router }/>
  </StrictMode>
)
