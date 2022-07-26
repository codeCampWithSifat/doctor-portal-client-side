import { useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken
} from "firebase/auth";
import { useEffect } from "react";

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin , setAdmin] = useState(false);
  const [token , setToken] = useState('')

  const googleSignIn = (navigate, location) => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user
        setUser(user);
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        setAuthError("")
        saveUser(user.email, user.displayName, 'PUT')
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const registerUser = (email, password, name , navigate , location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // save user in the data base 
        saveUser(email, name, "POST")


        const newUser = {email , displayName : name};
        setUser(newUser)
        updateProfile(auth.currentUser, {
          displayName: name, 
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        setAuthError("");
        // console.log(userCredential);
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        getIdToken(user)
        .then(idToken => {
          console.log(idToken);
          setToken(idToken);
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // logout functionality
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email,displayName, method) => {
    const user = {email, displayName};
    fetch(`http://localhost:5000/users`,{
      method: method,
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(user)
    })
    .then()
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])

  return {
    user,
    registerUser,
    admin,
    token,
    loginUser,
    logout,
    isLoading,
    authError,
    googleSignIn,
  };
};
export default useFirebase;
