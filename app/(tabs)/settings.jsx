import { AuthContext } from "@/config/context.config";
import { auth, db } from "@/config/firebase.config";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Settings() {
 
  const [isLoading,setisLoading] = useState(false);
  const [userInfo,setUserInfo] = useState(false)
  const router = useRouter();
   const {currentUser} = useContext(AuthContext);

     const handleSignOut = async () => {
    setisLoading(true);
    try {
      await signOut(auth)
      router.replace("/login")
      setisLoading(false)
    } catch (error) {
      Alert.alert("message",
        "an error occured",
        [{text:"try again"}]
      )
      console.log("error",error)
      setisLoading(false)
      
    }
  }

  useEffect(() => {
     const getUserInfo = async () => {
      try {
        const docRef = doc(db,"users",currentUser.uid);
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()){
          setUserInfo(docSnap.data())
        }
      } catch (error) {
        console.log("error",error)
      }
    }
   if(currentUser && currentUser.uid){
    getUserInfo()
   }
  },[currentUser])
  




  return (
    <SafeAreaProvider>
          <SafeAreaView>
            <ScrollView>
              <View>
              <Text 
                style={{fontSize:40, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"Chocolate Bar Demo"}}
                className="text-emerald-700 ">SPA BUDDY</Text>
              <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
            </View>
            <View className="flex items-center p-20 ">
              <Image
              style={{width:160,height:160}}
              source={require("../../public/images/user.png")}
              alt="display-pic-demo"
              />
              <Text className="font-bold text-lg">{userInfo.fullname}</Text>
              <Text className="text-stone-800 tracking-widest">{userInfo.username}</Text>
            </View>
            <View className="flex p-3 rounded-md " style={{marginHorizontal:20}}>
              <View className="flex flex-row justify-evenly mb-3">
                <Text className="text-stone-800 tracking-wider text-lg">Account Email:</Text>
                <Text className="text-stone-800 tracking-wider text-md">{currentUser?.email }</Text>
              </View>
               <View className="flex flex-row justify-evenly mb-3">
                <Text className="text-stone-800 tracking-wider text-lg">phone:</Text>
                <Text className="text-stone-800 tracking-wider text-md">{userInfo.phone}</Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-evenly mt-20 ">
              <Link href={"/"} className="flex flex-row items-center px-2 py-2 rounded-md bg-emerald-600">
                <View className="flex flex-row items-center gap-2">
                  <MaterialIcons name="update" size={44} color="white" />
                  {isLoading ? <ActivityIndicator size="small" color="white"/>
                  :
                    <Text className="text-white text-lg">Update Profile</Text>}
                </View>
              </Link>
              <Pressable onPress={handleSignOut} className="flex flex-row items-center px-3 py-2 rounded-md bg-red-700 gap-3">
                 <MaterialIcons name="logout" size={44} color="white" />
                  {isLoading ? <ActivityIndicator size="small" color="red"/>
                  :
                  <Text className="text-white text-lg">Log Out</Text>}
              </Pressable>

            </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
    
  
  );
}
