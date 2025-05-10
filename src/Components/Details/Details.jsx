import React from 'react'
import Subscription from '../Subscription/Subscription'
import { useLoaderData, useParams } from 'react-router'
function Details() {
    const details = useLoaderData()
  
  return (
    <div className='grid grid-cols-1  lg:grid-cols-3 gap-6 w-10/12 mx-auto my-24'> 
       {details.map(detail=> 
        <Subscription key={detail.id} detail={detail}></Subscription>
       )}
       
        
    </div>
  )
}

export default Details