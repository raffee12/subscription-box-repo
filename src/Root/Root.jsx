import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'

function Root() {
  return (
    <div>
        <Header>

        </Header>
        <div className='mt-7'>

        
    <Outlet></Outlet>
    </div>
    </div>
  )
}

export default Root