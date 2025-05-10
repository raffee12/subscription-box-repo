import React, { createContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../../firebase_init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const createUser = (email, password)=> {
  return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser =(email, password)=> {
return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = ()=> {
        return signOut(auth)
    }
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currenUser)=> {

setUser(currenUser)
    })
    return ()=> {
 unsubscribe()
    }
  })
    const userInfo = {
        user,
   createUser,
   signUser,
   signOutUser
   
    }
  return (
<AuthContext value={userInfo}>
    {children}
</AuthContext>
  )
}

export default AuthProvider