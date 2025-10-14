import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";

export const AuthContext = createContext({currentUser:undefined});

export function AuthProvider({ children }) {
    const [currentUser,setcurrentUser] = useState(undefined);
 
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, async (user) =>  {
            setcurrentUser(user);
      
        });
        return unsubscribe
    },[]);

    return(
        <AuthContext.Provider value={{ currentUser,setcurrentUser}}>
            { children }
        </AuthContext.Provider>

    )
    
}
