import React, { use, useState } from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import { MdPhotoCamera } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { FaEye } from "react-icons/fa";
import { LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from 'react-router'; 

import { auth } from '../../../firebase_init';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

function Register() {
 
  const [showPassword, setShowPassword] = useState(false);

  const { createUser,   refreshUser, googleLogIn} = use(AuthContext)
const navigate = useNavigate()
const handleFormSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const url = e.target.url.value;

  const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (!regExp.test(password)) {
    const errorMessage = `Password must contain:\n• At least one uppercase letter\n• At least one lowercase letter\n• Minimum 6 characters`;
    toast.error(errorMessage);
    return;
  }

  createUser(email, password)
    .then(async(res) => {
      const user = res.user; 

      const profile = {
        displayName: name,
        photoURL: url,
      };

    
      return updateProfile(user, profile)
        .then(() => {
          toast.success("User Created Successfully");
          navigate("/profile");
           refreshUser();
        })
        .catch((error) => {
          console.error("Profile update failed:", error);
          toast.error("Profile update failed.");
        });
    })
    .catch((err) => {
      console.error(err);
      toast.error(err.message);
    });
};


  return (
    <>
 <Helmet>
  <title>Create Account</title>
 </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md shadow-2xl bg-white/90 backdrop-blur-md rounded-2xl">
        <div className="card-body p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-purple-800">
            Create Account
          </h2>

          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label className="label text-sm font-semibold text-purple-700">
                <FaUserAlt className="inline-block mr-2 text-purple-500" />
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full rounded-xl"
                required
              />
            </div>

            <div>
              <label className="label text-sm font-semibold text-purple-700">
                <FaEnvelope className="inline-block mr-2 text-purple-500" />
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full rounded-xl"
                required
              />
            </div>

            <div>
              <label className="label text-sm font-semibold text-purple-700">
                <MdPhotoCamera className="inline-block mr-2 text-purple-500" />
                Photo URL
              </label>
              <input
                type="text"
                name="url"
                placeholder="Photo url"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            <div>
              <label className="label text-sm font-semibold text-purple-700">
                <FaLock className="inline-block mr-2 text-purple-500" />
                Password
              </label>
              <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full rounded-xl"
                required
              />
              <button onClick={()=> setShowPassword(!showPassword)}
              className='btn btn-xs absolute top-2 right-8'>
                   {showPassword ? <LuEyeOff/> : <FaEye/>}
              </button>
              </div>
            </div>

            <button className="btn btn-primary w-full rounded-xl text-lg bg-gradient-to-r from-pink-500 to-purple-600 border-none hover:from-purple-500 hover:to-pink-500">
              Register
            </button>
          </form>

          <div className="flex items-center justify-center gap-2">
            <div className="border-t w-full border-gray-300" />
            <span className="text-sm text-gray-500">or</span>
            <div className="border-t w-full border-gray-300" />
          </div>

          <button
            className="btn w-full border border-gray-300 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center gap-3 text-gray-700"
            onClick={() => googleLogIn().then(res=> console.log("Google")).catch(err=> console.log(err))}
          >
            <FcGoogle size={20} />
            Sign In with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
       </>
  );
}

export default Register;
