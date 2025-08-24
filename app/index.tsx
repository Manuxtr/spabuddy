
import { themeColors } from "@/utilities/maincolors.utils";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { screenWidth } from "./(tabs)";
import MyStack from "@/navigation/StackNavigator";

export default function IndexHome() {
  return (
      <SafeAreaProvider>
       <SafeAreaView style={{flex: 1, paddingVertical:10,display:"flex",justifyContent:"space-evenly"}}>
            <View>
              <Text 
                    style={{fontSize:40, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"FiraSans-MediumItalic",position:"fixed",top:0}}
                    className="text-emerald-700 ">SPA BUDDY</Text>
                <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
            </View>
           
                <View className=" border-emerald-500"
                  style={{paddingHorizontal:5}}>
                  <Text className="text-2xl font-bold bg-emerald-600 text-white text-justify font-mono">AT SPA BUDDY SELFCARE JUST GOT BETTER YOU CAN EXPLORE AND BOOK SELFCARE TREATMENTS IN MINUTES! FROM CUTE HAIRCUTS TO UNFORGETTABLE HAIR REVAMPS OR DEEP TISSUE MASSAGE TO REJUVENATING FACIALS,YOUR NEXT PAMPARING SESSION IS JUST A TAP AWAY!.
                  </Text>
                </View>
              <View className="bg-emerald-950">
                <Image
                source={require("../public/images/go.jpg")}
                style={{
                    width: screenWidth,
                    height: 340,
                    resizeMode: "cover",
                    backgroundColor:themeColors.darkGreen                                 
                }}
                
                />
            </View>
              <View style={{paddingHorizontal:10,}}>
                <TouchableOpacity  style={{ height:55,backgroundColor:themeColors.darkGreen,padding:5, borderRadius: 100,  justifyContent:"center", alignItems: "center" }}>
                  <Link href={("/login")} >
                  <Text className="text-2xl text-bold text-white font-mono font-extrabold">GET STARTED</Text></Link>
                </TouchableOpacity>
            </View>
             
   
        </SafeAreaView>
    </SafeAreaProvider>
  );
}




