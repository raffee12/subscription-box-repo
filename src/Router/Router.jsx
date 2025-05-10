import React from 'react'

import {
    createBrowserRouter,

  } from "react-router";
import Root from '../Root/Root';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

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
        }
     ]
    },
  ]);
  

export default router