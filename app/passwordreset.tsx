import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function PasswordReset() {
  return (
    <SafeAreaProvider>
          <SafeAreaView>
              <View>
                <Text 
                  style={{fontSize:40, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"FiraSans-MediumItalic",position:"fixed",top:0}}
                  className="text-emerald-700 ">SPA BUDDY</Text>
                <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
            </View>
            <View><Text className="text-center font-extrabold text-4xl text-blue-500">password reset Screen</Text></View>
          </SafeAreaView>
        </SafeAreaProvider>
    
  
  );
}