import { useEffect, useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
//   const [loading, setIsLoading] = useState(true);
  const auth = getAuth();

  // google login functionality
  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // logout functionality
  const logout = () => {
   //  setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      // .finally(() => setIsLoading(false));
  };

  // observe the present user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      // setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  // create user functionality
  async function registerUser(name, email, password) {
   //  setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    const user = auth.currentUser
    setUser(user)
   //  .finally(() => setIsLoading(false))
  }

  // login user functinality
  async function loginUser(email, password) {
   //  setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
   //  .finally(() => setIsLoading(false));
  }

  return { user, googleLogin, logout, error, registerUser, loginUser };
};
export default useFirebase;
