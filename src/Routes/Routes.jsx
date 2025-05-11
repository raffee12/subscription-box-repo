import React, { use } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { Navigate } from 'react-router'

function PrivateRoutes({children}) {
const {user, loading} = use(AuthContext)
if(loading){
    return <span className="loading loading-spinner text-secondary"></span>
}
if(!user){
    return <Navigate to={"/login"}></Navigate>
};
 return children;
 
}

export default PrivateRoutes