import { useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [authError , setAuthError] = useState('')

  const registerUser = (email, password) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setAuthError("")
        console.log(userCredential)
        // ...
      })
      .catch((error) => {
        setAuthError ( error.message);

      })
      .finally(() => setIsLoading(false))
  };

  const loginUser = (email, password) => {

    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("")
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false))
  };

  // observer the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [auth]);

  // logout functionality
  const logout = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false))
  };

  return {
    user,
    registerUser,
    loginUser,
    logout,
    isLoading,
    authError,
  };
};
export default useFirebase;
