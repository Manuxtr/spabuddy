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

                <View style={{ height:54,backgroundColor:themeColors.darkGreen,padding:2, borderRadius:100,justifyContent:"center", alignItems: "center",marginTop:30}}>           
                 <Link href={("/(tabs)")} >
                    <View>
                      <Text style={{
                        fontFamily:"Raleway-Regular",
                        fontSize:30,
                        color:"white",
                        fontWeight:800,
                       textAlign:"center"
                      }} >Log in
                      </Text>
                    </View>  
                 </Link>           
                </View>

              <View style={{marginTop:20,alignItems:"center"}}>
                <Link href={("/passwordreset")}>
                <View>
                  <Text  className="text-2xl font-bold">Forgot Password?</Text>
                </View>
                </Link>
              </View>
                <View style={{ height:54,backgroundColor:themeColors.darkGreen,padding:2, borderRadius:100,justifyContent:"center", alignItems: "center",marginTop:120}}>           
                 <Link href={("/signup")} >
                    <View>
                      <Text style={{
                        fontFamily:"Raleway-Regular",
                        fontSize:30,
                        color:"white",
                        fontWeight:800,
                       textAlign:"center"
                      }} >Create Account
                      </Text>
                    </View>  
                 </Link>           
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
