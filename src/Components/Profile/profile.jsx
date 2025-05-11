import React, { use, useState } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { NavLink } from 'react-router'
import { updateProfile } from 'firebase/auth'
import { auth } from '../../../firebase_init'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

function Profile() {
  const { user, refreshUser } = use(AuthContext)

  const [name, setName] = useState(user.displayName)
  const [photoURL, setPhotoURL] = useState(user.photoURL)
  const [saving, setSaving] = useState(false)

  function handleUpdate(e) {
    e.preventDefault()
    const name = e.target.name.value
    const photoURL = e.target.url.value
    setName(name)
    setPhotoURL(photoURL)
    setSaving(true)
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        refreshUser()
        setSaving(false)
      })
      .catch((err) => {
        console.log('hj')
      })
  }

  return (
    <>
 <Helmet>
  <title>User | Profile</title>
 </Helmet>
    <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
      <div className="card flex flex-col md:flex-row bg-base-100 shadow-xl w-full max-w-4xl">
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-full h-full object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none"
          />
        </div>
        <div className="card-body w-full md:w-1/2">
          <h2 className="card-title text-2xl font-semibold">
   User's Name : {user.displayName}
          </h2>
          <p className=" text-base font-bold w-fit 
      ">User's Email: {user.email}</p>
          <p className="text-base font-extrabold">User's Photo_Url: {user.photoURL}</p>
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 gap-4 mt-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold ">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="https://your-image-url.com"
                className="input input-bordered"
                name="url"
                required
              />
            </div>

            <div className="col-span-1">
              <button className="btn btn-neutral w-full">
                {saving ? 'Saving' : 'Save Changes'}
              </button>
            </div>
          </form>

          <div className="card-actions justify-end mt-4">
            <NavLink to={'/'}>
              <button className="btn btn-neutral">Back To Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
       </>
  )
}

export default Profile
