import { createContext,useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import { getDoc } from "firebase/firestore";
import { db } from "./firebase.config";
import { date } from "yup";

export const AuthContext = createContext({currentUser:undefined});

export function AuthProvider({ children }) {
    const [currentUser,setcurrentUser] = useState(undefined);
    const [fullname,setFullname] = useState(null)
    const [phone ,setPhone] = useState(null)

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, async (user) =>  {
            setcurrentUser(user);
          if(user){
            const userDoc = await getDoc(doc(db,"user",user.uid));
            if(userDoc.exists()){
                const data = userDoc.data(); 
                setFullname(data)
                setPhone(data)
            }
          
          }
        });
        return unsubscribe
    },[]);

    return(
        <AuthContext.Provider value={{ currentUser,fullname,phone}}>
            { children }
        </AuthContext.Provider>

    )
    
}
