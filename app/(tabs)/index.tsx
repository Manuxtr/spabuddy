import { myevents } from "@/assets/local-data/events";
import { Link } from "expo-router";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const screenWidth = Dimensions.get("window").width;
function Seperator() {
  return(
    <View
      style={{
        height: 20,
        backgroundColor: "transparent",
        
      }}
    />
  )
  
}



export default function Index() {
  return (
     <SafeAreaProvider>
        <SafeAreaView style={{flex:1}} >
          <View >
            <View style={{}}>
                <View>
                 <Text 
                    style={{fontSize:50, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"Chocolate Bar Demo"}}
                    className="text-emerald-700 ">SPA BUDDY</Text>
                  <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
                </View>
            </View>


            <FlatList 
            data={myevents}
            contentContainerStyle={{paddingBottom:120
            }}
            ItemSeparatorComponent={Seperator}
            renderItem={({item}) =>{
            return(
              <View className="">
                <View>
                  <Image
                    source={item.img}
                    alt="services photo"
                    style={{
                      width: screenWidth,
                      height: 400,
                      resizeMode: "cover",
                    
                    }}
                />
                </View>
                <View style={{ justifyContent:"center",alignItems:"center",paddingTop:15,marginBottom:1}}>
                  <Link href={"/(tabs)/appointment"} className="text-center text-emerald-500 ">
                   <Text className="text-2xl text-center">{item.title}</Text>
                  </Link>
                </View> 
              </View>
            )

          }}
        
        
          />

        </View>
        </SafeAreaView>


      </SafeAreaProvider>
   
  );
}