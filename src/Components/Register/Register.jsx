import React from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router';


function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md shadow-2xl bg-white/90 backdrop-blur-md rounded-2xl">
        <div className="card-body p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-purple-800">
            Create Account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="label text-sm font-semibold text-purple-700">
                <FaUserAlt className="inline-block mr-2 text-purple-500" />
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            <div>
              <label className="label text-sm font-semibold text-purple-700">
                <FaEnvelope className="inline-block mr-2 text-purple-500" />
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            <div>
              <label className="label text-sm font-semibold text-purple-700">
                <FaLock className="inline-block mr-2 text-purple-500" />
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

        

            <button className="btn btn-primary w-full rounded-xl text-lg bg-gradient-to-r from-pink-500 to-purple-600 border-none hover:from-purple-500 hover:to-pink-500">
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
