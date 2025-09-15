import { auth, db } from "@/config/firebase.config";
import { themeColors } from "@/utilities/maincolors.utils";
import { mainStyles } from "@/utilities/mainstyle.utils";
import { Link, useRouter } from "expo-router";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { signUpValidation } from "../components/signup-validation-schema";
import { FontAwesome } from "@expo/vector-icons";


export default function SignUp() {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        Alert.alert("messgae",
          "Account Created",
        )
       router.replace("/(tabs)")
      }
    });
    return unsubscribe;
  }, []);

  
  const [isLoading, setisLoading] = useState(false); 



 

  const { handleBlur, handleChange, handleSubmit, touched, errors, values } = useFormik({
    initialValues: { phone:"",email: "", password: "", passwordConfirmation: "" },
    onSubmit: async () => {
      setisLoading(true);
      try {
        const userDetails = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const docRef = await addDoc(collection(db,"user"),{
          phone:values.phone,
          email:values.email,
          uid:userDetails.user.uid,
          createdAt:new Date().getTime()

        });
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
      }>
         <View style={{display:"flex",flex:1,paddingVertical:59}} >
          <Text 
            style={{fontSize:50, fontWeight:"bold", textAlign:"center",fontFamily:"Chocolate Bar Demo"}}
            className="text-emerald-700 ">SPA BUDDY</Text>
          <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500">Best  in selfcare!</Text>
      </View>
      <ScrollView style={{display:"flex",paddingTop:30, }}>
        

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
                keyboardType="default"
                style={mainStyles.loginForm}
                placeholder="09079233872"
                value={values.phone}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}/>
              </View>
             
               
                <Text>{errors.phone}</Text>
              <View>
                <TextInput
                keyboardType="email-address"
                style={mainStyles.loginForm}
                placeholder="eg. example@gmail.com"
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
                placeholder="Confirm Password"
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
                
          {!errors.password && !errors.email && 
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