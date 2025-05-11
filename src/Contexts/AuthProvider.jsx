// AuthProvider.jsx
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase_init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 const googleProvider = new GoogleAuthProvider()
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLogIn = ()=> {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
    const refreshUser = () => {
    const currentUser = auth.currentUser;
    setUser({ ...currentUser }); // trigger update in UI
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    refreshUser,
    createUser,
    signUser,
    signOutUser,
    googleLogIn
  };

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
}

export default AuthProvider;
