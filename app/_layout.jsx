import { Stack } from "expo-router";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../config/context.config";
import "./globals.css";


export default function RootLayout() {
  const {currentUser} = useContext (AuthContext)
  return (
    <AuthProvider>
    <Stack >
      {currentUser !== undefined ?
      <Stack.Screen
        name="(tabs)"
     
      />
      :
      <Stack.Screen
        name="signup"
        
        options={{ 
        title: "Signup",
        headerShown:false
        }}/>
        }

       <Stack.Screen
        name="login"
        options={{ 
        title: "login",
        headerShown:false
        }}/>

      <Stack.Screen
        name="index"
        options={{ 
        title: "Home",
        headerShown:false
        }}/>

      <Stack.Screen
        name="passwordreset"
        options={{ 
        title: "PasswordReset",
        headerShown:false
        }}/>


    </Stack>
    </AuthProvider>
  )
}
