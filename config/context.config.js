import { createContext,useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import { getDoc } from "firebase/firestore";
import { db } from "./firebase.config";

export const AuthContext = createContext({
    currentUser:undefined,
    phone:undefined,
    fullname:undefined});

export function AuthProvider({ children }) {
    const [currentUser,setcurrentUser] = useState(undefined);
    const [fullname,setFullname] = useState(undefined)
    const [phone ,setPhone] = useState(undefined)

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, async (user) =>  {
            setcurrentUser(user);
          if(user){
            const userDoc = await getDoc(doc(db,"user",user.id));
            if(userDoc.exists()){
                const data = userDoc.data();
                setPhone(data.phone)
            }
          }
        });
        return unsubscribe
    },[]);

    return(
        <AuthContext.Provider value={{ currentUser ,fullname,phone }}>
            { children }
        </AuthContext.Provider>

    )
    
}
