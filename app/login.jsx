import { auth } from "@/config/firebase.config";
import { themeColors } from "@/utilities/maincolors.utils";
import { mainStyles } from "@/utilities/mainstyle.utils";
import { useFonts } from "expo-font";
import { Link, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { signInValidation } from "../components/signin-validation-schema";




export default function Login() {
  const [isLoading,setisLoading] = useState(false)
  const router = useRouter();

  // useeffect to prevent the user from going back after login
  // useEffect(() => {
  //   onAuthStateChanged(auth,(user) => {
  //     if(user){
  //       router.replace("/(tabs)")
  //     }
  //   });
    
  // })

    const {handleBlur,handleChange,handleSubmit,touched,errors,values} = useFormik({
      initialValues:{email:"",password:""},
      onSubmit: async () => {
        setisLoading(true)
        try {
           await signInWithEmailAndPassword(auth,values.email,values.password)
          setisLoading(false)
          Alert.alert("message",
            "welcome back",
            router.replace("/(tabs)")
          
          )
   
        } catch (error) {
          Alert.alert("MESSAGE",
            "error try again",
            [{text:"Dismiss"}]
          )
          
        }
      },
      validationSchema:signInValidation

    })

  //   const handleSingIn = async () => {
  //   setisLoading(true);

  //   try {
  //      await signInWithEmailAndPassword(auth,values.email,values.password);
  //     setisLoading(false)
  //     Alert.alert(
  //       "Message",
  //       "welcome back",
  //     )
  //     router.replace("/(tabs)")
  //   } catch (error) {
  //     Alert.alert(
  //       "Message",
  //       "An error occured. Try again",
  //       [{text:"Dismiss"}]

  //     );
  //     setisLoading(false);
  //     console.log("error",error)
      
  //   }
    

  // }

    const [fontsLoaded]=useFonts({
      "Raleway-Light":require("../assets/fonts/Raleway-Light.ttf"),
      "Raleway-Regular":require("../assets/fonts/Raleway-Regular.ttf"),
      "CutOutsFLF":require("../assets/fonts/CutOutsFLF.ttf"),
      "CFNuclearWar-Regular":require("../assets/fonts/CFNuclearWar-Regular.ttf"),
      "Chocolate Bar Demo":require("../assets/fonts/Chocolate Bar Demo.otf")
    });
  
    if (!fontsLoaded){
      return null
    };
  
  return (
   <KeyboardAvoidingView 
   behavior={Platform.OS === "ios" ? "padding"
    : "height"
   }
   style={mainStyles.wrapper}>  
       <View  style={{ paddingVertical:60,display:"flex",flex:1}}>
        <Text 
         style={{ fontSize:50, fontWeight:"bold", textAlign:"center",fontFamily:"Chocolate Bar Demo"}}
          className="text-emerald-700 ">SPA BUDDY</Text>
        <Text className="text-2xl font-bold text-center text-emerald-600  font-mono font border-b-2 border-emerald-500">Best  in selfcare!</Text>
      </View>

           <ScrollView style={{display:"flex", paddingTop:12}}>
             <View style={mainStyles.inputTextview}>
                <Text style={mainStyles.bodyText}>Log in account</Text>
              
                  {/* create account with google */}
                <TouchableOpacity style={mainStyles.signInBtn}>
                <Image
                  style={{
                  width: 36,
                  height: 36,
                  }}
                  source={require("../public/images/googlelogo.jpeg")}/>
                  <Text style={mainStyles.signInText}>Google</Text>
                  </TouchableOpacity>
                  {/* OR */}
                  <View style={mainStyles.orSec}>
                  <View style={mainStyles.line}></View>
                  <Text style={mainStyles.orText}>OR</Text>
                  <View style={mainStyles.line}></View>
                  </View>

              <View>
                <TextInput
                keyboardType="email-address"
                style={mainStyles.loginForm}
                placeholder="eg manuel@gmail.com"
                value={values.email}
                onChangeText={handleChange("email")} 
                onBlur={handleBlur("email")}/>
                <Text>{errors.email}</Text>
              </View>

              <View >
                <TextInput
                secureTextEntry={true}
                keyboardType="default"
                style={mainStyles.loginForm}
                placeholder=" enter Password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}/>
               </View>

                <View style={{paddingHorizontal:10, marginTop:40}}>
                
                  {!errors.email && !errors.password &&
                  <TouchableOpacity onPress={handleSubmit}  style={{ height:55,backgroundColor:themeColors.darkGreen,padding:5, borderRadius: 100,  justifyContent:"center", alignItems: "center" }}>
                  {isLoading ? <ActivityIndicator size="small" color="white"/> : <Text className="text-2xl text-bold text-white font-mono font-extrabold">Log in</Text>}
                  </TouchableOpacity>}
                </View>

                
                
                <View style={{marginTop:20,alignItems:"center"}}>
                  <Link href={("/passwordreset")}>
                  <View>
                  {isLoading ? <ActivityIndicator size="small" color="white"/>
                  :  
                  <Text  className="text-2xl font-bold">Forgot Password?</Text>}
                  </View>
                  </Link>
                </View>

                <View style={mainStyles.already}>
                  <Text style={mainStyles.alreadyText}>Don't have an account?</Text>
                 <Link href="/signup" style={mainStyles.alreadyLink}>Go to sign up</Link>
                </View>
              </View>
    
           </ScrollView>
   </KeyboardAvoidingView>
  );
}



const LoginPageStyle=StyleSheet.create({
  loginText:{
    fontFamily:"Raleway-Regular",
    fontSize:24,
    color:"white",
    fontWeight:500,
    textAlign:"center"
  },


});
