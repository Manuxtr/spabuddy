import { db } from "@/config/firebase.config";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";




export default function APhistory() {
  const [aphistory,setAPhistory]=useState([]);
  const [expandText,setExpandText]=useState(false);

  // useeffect to get appointments from database
  useEffect(() =>{
    const handleFetchData = async () => {
      const recievedData = [];
      const onSnap = await getDocs(collection(db,"bookings"))
      onSnap.docs.forEach(doc => recievedData.push({
        id:doc.id,
        data:doc.data({date:Timestamp.now().toDate()})
      }));
      setAPhistory(recievedData)
    }
    handleFetchData()
  },[])

if (aphistory.length > 0) {

    return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
          <View>
            <Text 
              style={{fontSize:40, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"Chocolate Bar Demo",position:"fixed",top:0}}
              className="text-emerald-700 ">SPA BUDDY</Text>
            <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
        </View>
        <FlatList
        data={aphistory}
        renderItem={({item}) => {
         return(
          <View style={{height:350,width:"100%",backgroundColor:"white",padding:10,gap:2,borderWidth:5,borderColor:"green", paddingHorizontal:10}}>
            <Text className="text-2xl font-bold ">Name: {item.data.name}</Text>
            <Text className="text-2xl font-bold ">Phone: {item.data.phone}</Text>
            <Text className="text-2xl font-bold ">Email: {item.data.email}</Text>
              <Pressable onPress={() => setExpandText(!expandText)}>
             {expandText 
             ? 
             <Text className="text-2xl font-bold">Address: {item.data.address}</Text>
              :
              <Text className="text-2xl font-bold">Address: {item.data.address.slice(0,24)}..</Text>
              }
           </Pressable>
            {/* <Text className="text-2xl font-bold">Address:{item.data.address}</Text> */}
           <Pressable onPress={() => setExpandText(!expandText)}>
             {expandText 
             ? 
             <Text className="text-2xl font-bold ">Requests: {item.data.requests}</Text>
              :
              <Text className="text-2xl font-bold ">Requests: {item.data.requests.slice(0,24)}..</Text>
            }
           </Pressable>
            <Text className="text-2xl font-bold">Gender: {item.data.gender}</Text>
            <Text className="text-2xl font-bold">Services: {item.data.services}</Text>
            <Text className="text-2xl font-bold">Date: {item.data.date.toLocaleString()}</Text>
          

            
          </View>
         )
        }}
        keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
  
} else {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.emptyWrapper}> 
        <ActivityIndicator size="large" color="green"/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
}


const styles = StyleSheet.create({
  emptyWrapper:{
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
});