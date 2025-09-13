import { auth,db} from "@/config/firebase.config";
import { themeColors } from "@/utilities/maincolors.utils";
import { mainStyles } from "@/utilities/mainstyle.utils";
import { Link, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as yup from "yup";
import { router } from "expo-router";
import {signUpValidation} from"../components/signup-validation-schema"
import { addDoc, collection } from "firebase/firestore";


export default function SignUp() {
  
  const [isLoading, setisLoading] = useState(false); 
  
  const router = useRouter(); 

 

  const { handleBlur, handleChange, handleSubmit, touched, errors, values } = useFormik({
    initialValues: { email: "", password: "", passwordConfirmation: "" },
    onSubmit: async () => {
      setisLoading(true);
      try {
        const userDetails = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const docRef =await addDoc(collection(db,"user"),{
          email:values.email,
          uid:userDetails.user.uid,
          createdAt:new Date().getTime()

        });

        if(docRef.id){
          Alert.alert(
            "message",
            "Account created",
            [ {text:"okay"}
             ,{text:"Go to Home",
            onPress: () => router.replace("/(tabs)")}]
          )
        }

        console.log(userDetails);
        setisLoading(false);

      } catch (error) {
        Alert.alert("message",
          "an unknown error occured",
          [{text:"Dismiss"}]
        );
        console.log(error)
        setisLoading(false)
      }
    },
validationSchema:signUpValidation
  });

  return (
   <KeyboardAvoidingView
     style={mainStyles.wrapper}   
      behavior={Platform.OS === "ios" ? "padding" 
        : "height"
      }
      
      >
     <View style={{flex: 1, paddingVertical:10,display:"flex",marginTop:Platform.OS === "android" ? StatusBar.currentHeight : 60 }}>
        <Text 
          style={{fontSize:40, fontWeight:"bold", textAlign:"center",fontFamily:"FiraSans-MediumItalic"}}
          className="text-emerald-700 ">SPA BUDDY</Text>
          <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500">Best  in selfcare!</Text>
      </View>
      <ScrollView style={{display:"flex", paddingTop:12}}>
        <View style={mainStyles.inputTextview}>

               <Text style={mainStyles.bodyText}>Create new account</Text>

                        {/* create account with google */}
                <TouchableOpacity style={mainStyles.signInBtn}>
                  <Image
                   style={{
                    width: 36,
                    height: 36,
                    }}
                  source={require("../public/images/google.jpg")}/>
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
                placeholder="eg. manuel@gmail.com"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                />
                <Text>{errors.email}</Text>
               </View>

                <View>
                  <TextInput
                  secureTextEntry={true}
                  keyboardType="default"
                  style={mainStyles.loginForm}
                  placeholder=" Create Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  />
                  {errors.password && touched.password &&
                  <Text>{errors.password}</Text>
                  }
               </View>

                {<View>
                <Text style={mainStyles.inputText}></Text>
                <TextInput
                style={mainStyles.loginForm}
                placeholder="Comfirm Password"
                keyboardType="default"
                secureTextEntry={true}
                value={values.passwordConfirmation}
                onChangeText={handleChange("passwordConfirmation")}
                onBlur={handleBlur("passwordConfirmation")}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation &&
                <Text>{errors.passwordConfirmation}</Text>
                }
               </View>}

        <View style={{paddingHorizontal:10, marginTop:40}}>
                
          {!errors.passwordConfirmation && !errors.email && touched.passwordConfirmation &&
          <TouchableOpacity onPress={handleSubmit}  style={{ height:55,backgroundColor:themeColors.darkGreen,padding:5, borderRadius: 100,  justifyContent:"center", alignItems: "center" }}>
           {isLoading ? <ActivityIndicator size="small" color="white"/>
           :
            <Text className="text-2xl text-bold text-white font-mono font-extrabold">Create Account</Text>}
          </TouchableOpacity>}
        </View>
        </View>
            {/* already have an account? */}
        <View style={mainStyles.already}>
            <Text style={mainStyles.alreadyText}>Already have an account?</Text>
            <Link href="/login" style={mainStyles.alreadyLink}>Go to Log in</Link>
        </View>
      </ScrollView> 
   </KeyboardAvoidingView>
  );
}