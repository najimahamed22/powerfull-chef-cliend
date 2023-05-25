import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (createdUser) => {
        setUser(createdUser.user);
        return createdUser;
      }
    );
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const updateUser = (name, photo) => {
    const currentUser = auth.currentUser;
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      //   console.log("Logged user okay", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      updateUser(user.displayName, user.photoURL);
    }
  }, [user]);

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    logOut,
    updateUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
