
import { themeColors } from "@/utilities/maincolors.utils";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { screenWidth } from "./(tabs)";



export default function IndexHome() {

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
       <SafeAreaView style={{flex: 1,display:"flex",justifyContent:"space-evenly",paddingVertical:1,paddingHorizontal:4}}>
          <View>
            <Text 
              style={{fontSize:50, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"Chocolate Bar Demo",position:"fixed",top:0}}
              className="text-emerald-700 ">SPA BUDDY
            </Text>
            <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
        </View>
        <View className=" border-emerald-500 ">
          <Text style={landPageStyle.landingText} className=" bg-emerald-600  ">AT SPA BUDDY SELFCARE JUST GOT BETTER YOU CAN     EXPLORE AND BOOK SELFCARE TREATMENTS IN MINUTES! FROM CUTE HAIRCUTS TO UNFORGETTABLE HAIR REVAMPS  DEEP TISSUE MASSAGE AND REJUVENATING FACIALS,YOUR NEXT PAMPARING SESSION IS JUST A TAP AWAY!
          </Text>
        </View>
          <View className="bg-emerald-950">
            <Image
              source={require("../public/images/braiding.jpg")}
              style={{
              width: screenWidth,
              height: 290,
              resizeMode: "cover",
              backgroundColor:themeColors.darkGreen                                 
              }}
            />
          </View>
          <View style={{ height:54,backgroundColor:themeColors.darkGreen,padding:2, borderRadius:  100,  justifyContent:"center", alignItems: "center"}}>
            <Link href={("/login")} >
              <View style={{ paddingHorizontal:5}}>
                <Text style={landPageStyle.landingText2} >GET STARTED</Text>
            </View>
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

 const landPageStyle=StyleSheet.create({
  landingText:{
    fontFamily:"Raleway-Regular",
    fontSize:24,
    color:"white",
    fontWeight:200,
    textAlign:"center"
  },
  landingText2:{
    fontFamily:"Raleway-Regular",
    fontSize:30,
    color:"white",
    fontWeight:800,
    textAlign:"center"
    
  },

});


