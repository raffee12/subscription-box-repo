import React from 'react'

import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
function Root() {
  return (
    <div>
        <Header>

        </Header>


    
    <Outlet></Outlet>
    <Footer></Footer>
    <ToastContainer  autoClose={3000} />
    </div>
  )
}

export default Root