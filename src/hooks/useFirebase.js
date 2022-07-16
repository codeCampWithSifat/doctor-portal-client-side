import { useState } from "react"
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";

firebaseAuthentication()


const useFirebase = () => {
    const [user , setUser] = useState({})
    
} 
export default useFirebase