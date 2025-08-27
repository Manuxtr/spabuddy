import { themeColors } from "@/utilities/maincolors.utils";
import { mainStyles } from "@/utilities/mainstyle.utils";
import { Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";




export default function Login() {
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
   <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, paddingVertical:10,display:"flex",justifyContent:"space-evenly"}}>
            <View>
              <Text 
             style={{fontSize:50, fontWeight:"bold", textAlign:"center",fontFamily:"Chocolate Bar Demo"}}
              className="text-emerald-700 ">SPA BUDDY</Text>
              <Text className="text-2xl font-bold text-center text-emerald-600  font-mono font border-b-2 border-emerald-500">Best  in selfcare!</Text>
            </View>
           <ScrollView style={{display:"flex", paddingTop:120}}>
             <View style={mainStyles.inputTextview}>
              <View>
                <TextInput
                style={mainStyles.loginForm}
                placeholder="Username or email address" />
              </View>

              <View>
                <Text style={mainStyles.inputText}></Text>
                <TextInput
                style={mainStyles.loginForm}
                placeholder="Password"/>
               </View>

              <View style={{paddingHorizontal:10, marginTop:40}}>
                <TouchableOpacity  style={{ height:55,backgroundColor:themeColors.darkGreen,padding:5, borderRadius: 100,  justifyContent:"center", alignItems: "center" }}>
                <Link href={("/(tabs)")} >
                <Text style={LoginPageStyle.loginText} className="text-2xl text-bold text-white font-mono font-extrabold">Log in</Text></Link>
                </TouchableOpacity>
              </View>

              <View style={{marginTop:20,alignItems:"center"}}>
                <Link href={("/passwordreset")}>
                <Text  className="text-2xl font-bold">Forgot Password?</Text>
                </Link>
              </View>

              <View style={{paddingHorizontal:10,marginTop:140}}>
                  <TouchableOpacity  style={{ height:55,backgroundColor:themeColors.lightGreen,padding:5, borderRadius: 100,  justifyContent:"center", alignItems: "center" }}>
                  <Link href={("/signup")} >
                  <Text style={LoginPageStyle.loginText} className="text-2xl text-bold text-white font-mono font-extrabold">Create new account</Text></Link>
                </TouchableOpacity>
            </View>



                    
          </View>
           </ScrollView>
          
        </SafeAreaView>
   </SafeAreaProvider>
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
