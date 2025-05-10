import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../../Contexts/AuthContext'
import { toast } from 'react-toastify'



function Header() {
const {user, signOutUser} = use(AuthContext)

const signOut = ()=> {
  signOutUser()
  .then(res=> {
  toast.success("User Signed Out Successfully")
  })
 .catch(err=> {
toast.error(err.message) 
 })
}
  const links = <>
 <li><NavLink to={"/"}>Home</NavLink></li>
<li><NavLink to={"/login"}>Login</NavLink></li>
<li><NavLink to={"/register"}>Register</NavLink></li>

  </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
   {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">HomeDecore</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
   
    {user ? 
     <>
        <div className="relative group cursor-pointer">
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full mr-[10px]" 
              />
               <div className="absolute right-10 top-[20px] -translate-y-1/2 font-extrabold text-gray-800 px-3 py-1 rounded  text-sm hidden group-hover:block whitespace-nowrap z-10">
    {user.displayName || "User"}
  </div>
             </div>
  
    <a className="btn" onClick={signOut}>Sign Out</a>   </>
     : <Link to={"/login"} className="btn">Sign In</Link>}
  </div>
</div>
    </div>
  )
}

export default Header