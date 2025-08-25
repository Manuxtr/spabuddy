import { themeColors } from "@/utilities/maincolors.utils";
import { mainStyles } from "@/utilities/mainstyle.utils";
import { Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";



export default function Login() {
  return (
   <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, paddingVertical:10,display:"flex",justifyContent:"space-evenly"}}>
            <View>
              <Text 
             style={{fontSize:40, fontWeight:"bold", textAlign:"center",fontFamily:"FiraSans-MediumItalic"}}
              className="text-emerald-700 ">SPA BUDDY</Text>
              <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500">Best  in selfcare!</Text>
            </View>
           <ScrollView style={{display:"flex", paddingTop:120}}>
             <View style={mainStyles.inputTextview}>
                

              <View>
                <TextInput
                style={mainStyles.loginForm}
                placeholder="Full Name" />
              </View>
              
              <View>
                <Text style={mainStyles.inputText}></Text>
                <TextInput
                style={mainStyles.loginForm}
                placeholder="Phone or email address"/>
               </View>

                <View>
                <Text style={mainStyles.inputText}></Text>
                <TextInput
                style={mainStyles.loginForm}
                placeholder="Password"/>
               </View>
                <View>
                <Text style={mainStyles.inputText}></Text>
                <TextInput
                style={mainStyles.loginForm}
                placeholder="Comfirm Password"/>
               </View>

              <View style={{paddingHorizontal:10, marginTop:40}}>
                <TouchableOpacity  style={{ height:55,backgroundColor:themeColors.darkGreen,padding:5, borderRadius: 100,  justifyContent:"center", alignItems: "center" }}>
                <Link href={("/(tabs)")} >
                <Text className="text-2xl text-bold text-white font-mono font-extrabold">Sign up</Text></Link>
                </TouchableOpacity>
              </View>
         
          </View>
           </ScrollView>
          
        </SafeAreaView>
   </SafeAreaProvider>
  );
}