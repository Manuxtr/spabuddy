import { AuthContext } from "@/config/context.config";
import { db } from "@/config/firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";





export default function APhistory() {

  const {currentUser} = useContext(AuthContext)
  
  const [aphistory,setAPhistory]=useState([]);
  const [expandText,setExpandText]=useState(false);
  const [modalVisible,setModalVisible]=useState(false);
  const [selectedItem, setSelectedItem] = useState(null);



  // useeffect to get appointments from database
  useEffect(() =>{
    const handleFetchData =  () => {
      const q =query(collection(db,"bookings"))

      onSnapshot(q,(querySnapShot) => {
        const recievedData = []
        querySnapShot.forEach(doc => recievedData.push({
          id:doc.id,
          data:doc.data()
  
        }));
        setAPhistory(recievedData)
      })
    }
    handleFetchData()
  },[])

if (aphistory.length > 0) {

    return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1,paddingHorizontal:10,paddingBottom:40 }}>
        <View>
          <Text 
            style={{fontSize:40, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"Chocolate Bar Demo",position:"fixed",top:0}}
            className="text-emerald-700 ">SPA BUDDY</Text>
          <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
        </View>
       <ImageBackground source={require("../../public/images/hairitems.jpg")}>
         <FlatList
          showsHorizontalScrollIndicator={false}
          data={aphistory}
          renderItem={({item}) => {
          return(
            <View style={{
              height:270,
              width:"100%",
              padding:4,
              backgroundColor:"white",
              borderWidth:0.5,
              borderColor:"green", 
              borderRadius:5,
              marginVertical:9,
              shadowColor:"green",
              shadowOffset:{width:6,height:5},
              shadowOpacity:0.25,
              shadowRadius:3.84,
              fontFamily:"Raleway-Light"
             }} >
              <View>
                <Text className="text-3xl font-extrabold text-emerald-700 text-center mb-3" >Appointment Details</Text>
              </View>
              <View className="flex-row  gap-6">
                <Text className="text-2xl font-semibold">Name:</Text>
                <Text className="text-2xl  ">{currentUser?.fullname}</Text>
              </View>
              <View className="flex-row  gap-6">
                <Text className="text-2xl font-semibold">Phone:</Text>
                <Text className="text-2xl  ">{currentUser?.phone}</Text>
              </View>
                <View className="flex-row  gap-6">
                  <Text className="text-2xl font-semibold">Gender:</Text>
                  <Text className="text-2xl  ">{item.data.gender}</Text>
               </View>
               <View className="flex-row  gap-6">
                 <Text className="text-2xl font-semibold">Date:</Text>
                  <Text className="text-2xl ">{item.data.date.toLocaleString()}</Text>
                </View>
               <View className="flex-row  gap-6">
                  <Text className="text-2xl font-semibold">Services:</Text>
                  <Text className="text-2xl  ">{item.data.services}</Text>
               </View>

                <View className="flex flex-row  gap-6 justify-between" >
                    <Pressable onPress= {() => setSelectedItem(item)}>
                    <Text className="text-2xl font-semibold text-red-700" >Show more info</Text>
                  </Pressable>
                </View>

                <Modal
                style={{}}
                visible={selectedItem?.id === item.id}
                onRequestClose={() => setSelectedItem(null)}
                  transparent={false}
                  animationType="slide">
                 
                 

                  <View className="flex-row  gap-6">
                  <Text className="text-2xl font-semibold">Email:</Text>
                    <Text className="text-2xl  ">{item.data.email}</Text>
                  </View>
                
                  <View style={{flexDirection:"row",gap:6}}>
                    <Text className="text-2xl font-bold flex flex-row justify-between" >Address:</Text>
                    <Pressable onPress={() => setExpandText(!expandText)}>
                      {expandText 
                      ?   
                      <Text className="text-2xl ">{item.data.address}</Text>
                      :
                      <Text className="text-2xl ">{item.data.address.slice(0,24)}..</Text>
                      }
                   </Pressable>
                  </View>
                  <View style={{flexDirection:"row",display:"flex",gap:2,flexWrap:"wrap"}}>
                    <Text className="text-2xl font-bold " >Requests:</Text>
                    <Pressable onPress={() => setExpandText(!expandText)}>
                    {expandText 
                    ? 
                    <Text className="text-2xl ">{item.data.requests}</Text>
                    :
                    <Text className="text-2xl ">{item.data.requests.slice(0,24)}..</Text>
                    }
                    </Pressable>
                  </View>
                  <Button title="Hide" onPress={() => setSelectedItem(null)}/>

                </Modal>
             
              
            </View>
           
           )
           }}
            keyExtractor={(item) => item.id}
          />
       </ImageBackground>
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