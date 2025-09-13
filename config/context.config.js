import { createContext,useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";

export const AuthContext = createContext({currentUser:false});

export function AuthProvider({ children }) {
    const [currentUser,setcurrentUser] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth,(user) =>  {
            setcurrentUser(user)
        })
    },[]);

    return(
        <AuthContext.Provider value={{ currentUser }}>
            { children }
        </AuthContext.Provider>

    )
    
}
