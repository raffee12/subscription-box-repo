import React from 'react'

import {
    createBrowserRouter,

  } from "react-router";
import Root from '../Root/Root';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import PrivateRoutes from '../Routes/Routes';
import Product from '../Components/Product/Product';
import Profile from '../Components/Profile/profile';
import Blog from '../Components/blog/blog';

const router = createBrowserRouter([
    {
      path: "/",
     Component: Root,
     children: [
        {
            index: true,
            Component : Home,
            loader: ()=> fetch("/Products.json")
        },
    
        {
          path: "/login",
          Component : Login
        },
        {
          path: "/register",
          Component : Register
        },
        {
          path: "/description/:id",
        
element: <PrivateRoutes>

    <Product></Product>
   </PrivateRoutes>,
     loader: ()=> fetch("/Products.json")
        },
        {
          path: "/profile",
element: <PrivateRoutes>
   <Profile></Profile>
   </PrivateRoutes>
   
              

        },{
        path: "/blog",
        element: <PrivateRoutes>
          <Blog></Blog>
        </PrivateRoutes> ,
        loader : ()=> fetch("/Products.json")
        }

     ],
     
     
   
    },
             {
        path: "/*",
        element:  <h2 className='font-extrabold text-6xl text-center mt-[100px]'>Error404</h2>,
    }
  ]);
  

export default router