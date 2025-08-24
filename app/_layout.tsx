import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ 
        headerShown: false}}/>

      
      <Stack.Screen
        name="index"
        options={{ 
        headerShown: false,
        title: "Home",
        }}/>

      <Stack.Screen
        name="login"
        options={{ 
        headerShown: false,
        title: "login",
        }}/>

        
      <Stack.Screen
        name="signup"
        options={{ 
        headerShown: false,
        title: "Signup",
        }}/>

      <Stack.Screen
        name="passwordreset"
        options={{ 
        headerShown: false,
        title: "PasswordReset",
        }}/>


    </Stack>
  )
}
