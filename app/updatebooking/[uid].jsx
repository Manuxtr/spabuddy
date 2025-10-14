import { AuthContext } from "@/config/context.config";
import { themeColors } from "@/utilities/maincolors.utils";
import { mainStyles } from "@/utilities/mainstyle.utils";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams ,useRouter} from "expo-router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { db } from "../../config/firebase.config";


export default function UpdateBookings() {
  const {uid} = useLocalSearchParams();
  const router = useRouter();

  const [date,setDate]=useState(new Date());
  const [showPicker,setShowPicker]=useState(false);
  const [mode,setMode]=useState("date");
  const [address,setAddress]=useState("");
  const [requests,setRequests]=useState("");
  const [services,setServices]=useState("");
  const [gender,setGender]=useState("");
  const [isloading,setIsLoading]=useState(false)



  // to fetch user data from db
  useEffect(() => {
    const getBookingData = async () => {
      try {
        setIsLoading(true)
        const docRef = doc(db,"bookings",uid);
        const docSnap = await getDoc(docRef);
      

        if(docSnap.exists()){
          const data = docSnap.data()
          setGender(data.gender);
          setServices(data.services);
          setAddress(data.address);
          setDate(data.date ? new Date(data.date) : new Date());
          setRequests(data.requests)
        }else{
          Alert.alert("error","no event found")
         
        }
      } catch (error) {
        console.log("error updating booking",error)
      }finally{
        setIsLoading(false)
      }
    }
    getBookingData()
  },[uid])

  const handleUpdateBooking = async () => {
    if(!gender || !services || !address || !requests ){
      Alert.alert("message",
        "ALL FIELDS REQIRED",
        [{text:"Dismiss"

        }])
        return;
    }
    try {
      setIsLoading(true)
      const docRef = doc(db,"bookings",uid);
      await updateDoc(docRef,{
        gender:gender,
        services:services,
        requests:requests,
        address:address,
        date:date.getTime(),
        updatedAt:new Date().getTime()
      })
      setIsLoading(false)
      Alert.alert("sucesss",
        "booking updated",
      [{text:"okay"}]
    );
    router.back()
    } catch (error) {
      console.log("ann error ocuured",error);
      Alert.alert("error",
        "failed to update booking"
      );
      setIsLoading(false)
      
    }
  }
  // for dropdown list of services
  const servicesOptions=[
    {label:"Mens Cut",value:"Mens cut"},
    {label:"Womens cut",value:"Womens cute"},
    {label:"Nail Tech",value:"Nail Tech"},
    {label:"MakeOvers",value:"Makeovers"},
    {label:"Spa Sessions",value:"Spa Sessions"},
    {label:"Lash Tech",value:"Lash Tech"},

  ];

  // for drop down gender
  const userGender=[
    {label:"Male",value:"Male"},
    {label:"Female",value:"Female"}
  ]



  // constant to handle date selection
  const onChange=(event,userDate)=>{
    const currentDate=userDate || date;
    setDate(currentDate);
    setShowPicker(false) ;
  }
  const showMode=(currentMode)=>{
    setShowPicker(true);
    setMode(currentMode)
  };

  const ShowDatepicker=()=>{
    showMode("date")
  };
  const ShowTimepicker=()=>{
    showMode("time")
  };



  return (

      <KeyboardAvoidingView style={{flex:1}}
      //  <SafeAreaProvider> 
        behavior={Platform.OS==="ios"? "padding":"height"}>
        <SafeAreaView style={{display:"flex",justifyContent:"space-between"}}>
          <ScrollView >
            <View>
              <Text 
              style={{fontSize:50, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"Chocolate Bar Demo",position:"fixed",top:0}}
              className="text-emerald-700 ">SPA BUDDY</Text>
              <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
            </View>
          
            <View style={mainStyles.inputTextview}>
              {/* <View style={{justifyContent:"center"}}>
               <Text style={mainStyles.inputText}>Name:</Text>
                <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={mainStyles.loginForm}
                placeholder="Enter your name here"
                />
              </View> */}
                {/* <View style={{justifyContent:"center"}}>
                <Text style={mainStyles.inputText}>Phone:</Text>
                <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={mainStyles.loginForm}
                placeholder="Enter your phone here"
                />
              </View> */}
                {/* <View style={{justifyContent:"center"}}>
                <Text style={mainStyles.inputText}>Email:</Text>
                <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={mainStyles.loginForm}
                placeholder="Enter your email here"
                />
              </View> */}
                <View style={{justifyContent:"center"}}>
                <Text style={mainStyles.inputText}> Gender:</Text>
                <RNPickerSelect
                items={userGender}
                onValueChange={(item) =>setGender(item)}
                value={gender}
                style={pickerSelectStyles.inputIOS}
                placeholder={{ label: "Select your gender", value: gender}}
                />
              </View>
             <View style={{justifyContent:"center"}}>
                <Text style={mainStyles.inputText}> Services:</Text>
                <RNPickerSelect items={servicesOptions}
                onValueChange={(item) =>setServices(item)}
                value={services}
                style={pickerSelectStyles.inputIOS}
                placeholder={{ label: "Select a service", value: null}}
                />
              </View>
                
                <View style={{justifyContent:"center"}}>
                <Text style={mainStyles.inputText}>Address:</Text>
                <TextInput
                value={address}
                onChangeText={(text) => setAddress(text)}
                style={mainStyles.loginForm}
                placeholder="Enter your Address here"
                />
              </View>
                  <View style={{justifyContent:"center"}}>
                  <Text style={mainStyles.inputText}>Special request:</Text>
                  <TextInput
                  value={requests}
                  multiline={true}
                  onChangeText={(text) => setRequests(text)}
                  style={mainStyles.loginForm}
                  placeholder="enter your special request "
                />
              </View>
        
              <View style={{justifyContent:"center",padding:2}}>
                <TouchableOpacity
                  style={mainStyles.loginForm}
                  onChangeText={()=>setShowPicker(true)}>
                  <Text className="text-2xl text-emerald-500">Appointment Date & Time:</Text>
                  {showPicker && (
                  <DateTimePicker
                  testID="dateTimePicker"
                  mode={mode}
                  value={date}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}/>
                  )}
                </TouchableOpacity>
                <View style={{display:"flex", flexDirection:"row", gap:80,justifyContent:"center",padding:20,alignItems:"center"}}>
                  <TouchableOpacity style={mainStyles.dateandtimepicker} onPress={ShowDatepicker}><Text className="font-bold text-center text-white">Select Date</Text></TouchableOpacity>
                  <TouchableOpacity style={mainStyles.dateandtimepicker} onPress={ShowTimepicker}><Text className="font-bold text-center text-white"> Select Time</Text></TouchableOpacity>
                </View>
              </View>

            </View>

            <View style={{paddingHorizontal:10, paddingBottom:20}}>
              <TouchableOpacity onPress={
                address.length > 6 &&
                gender != null &&
                services != null 
                ? handleUpdateBooking : () => {}}
               style={{ height:54,backgroundColor:themeColors.darkGreen,padding:2, borderRadius:100,justifyContent:"center", alignItems: "center",marginTop:30}}>           
                <Text style={{
                  fontFamily:"Raleway-Regular",
                  fontSize:30,
                  color:"white",
                  fontWeight:800,
                 textAlign:"center"
                 }} >update Appointment
                </Text>  
                {isloading=== true && <ActivityIndicator size="large" color="red"/>}     
              </TouchableOpacity>
            </View>
          </ScrollView> 
        </SafeAreaView>
   {/* </SafeAreaProvider> */}
     </KeyboardAvoidingView> 
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#fff', // Added a background color for visibility
    height: 50,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})
