import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
 
  RouterProvider,
} from "react-router";
import router from './Router/Router';
import AuthProvider from './Contexts/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>
    <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
</HelmetProvider>
  

  </StrictMode>,
)
