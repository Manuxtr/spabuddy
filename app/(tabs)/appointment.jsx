import { themeColors } from "@/utilities/maincolors.utils";
import { mainStyles } from "@/utilities/mainstyle.utils";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Link } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import {formatTimestampToDate} from "@utilities\date-formater.utils";

export default function BookAp() {

  const [date,setDate]=useState(new Date());
  const [showPicker,setShowPicker]=useState(false);
  const [mode,setMode]=useState("date")


  // constant to handle date selection
  const onChange=(event,userDate)=>{
    const currentDate=userDate || date;
    setDate(currentDate);
    setShowPicker(false) 

  }
    const ShowDatepicker=()=>{
    showMode("date")
  };

  const showMode=(currentMode)=>{
    setShowPicker(true);
    setMode(currentMode)
  };
  const ShowTimepicker=()=>{
    showMode("time")
  };

  return (
   <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, paddingVertical:10,display:"flex",justifyContent:"space-between"}}>
          <View>
            <Text 
                    style={{fontSize:40, fontWeight:"bold", textAlign:"center", marginTop:20,fontFamily:"FiraSans-MediumItalic",position:"fixed",top:0}}
                    className="text-emerald-700 ">SPA BUDDY</Text>
            <Text className="text-2xl text-center text-emerald-600  font-mono font border-b-2 border-emerald-500 font-bold">Best  in selfcare!</Text>
         </View>
         <ScrollView>
               <View style={mainStyles.inputTextview}>
                  <View style={{justifyContent:"center"}}>
                    <Text style={mainStyles.inputText}>Name:</Text>
                    <TextInput
                    style={mainStyles.loginForm}
                    placeholder="Enter your name here"
                    />
                  </View>
                  <View style={{justifyContent:"center"}}>
                    <Text style={mainStyles.inputText}>Services:</Text>
                    <TextInput
                    style={mainStyles.loginForm}
                    placeholder="Select Services"
                    />
                  </View>
                  <View style={{justifyContent:"center"}}>
                    <Text style={mainStyles.inputText}>Phone:</Text>
                    <TextInput
                    style={mainStyles.loginForm}
                    placeholder="Enter your phone here"
                    />
                  </View>
                  <View style={{justifyContent:"center"}}>
                    <Text style={mainStyles.inputText}>Address:</Text>
                    <TextInput
                    style={mainStyles.loginForm}
                    placeholder="Enter your Address here"
                    />
                  </View>
                  <View style={{justifyContent:"center"}}>
                    <Text style={mainStyles.inputText}>Gender:</Text>
                    <TextInput
                    style={mainStyles.loginForm}
                    placeholder="Select gender"
                    />
                  </View>
                  <View style={{justifyContent:"center",padding:10}}>
                      <TouchableOpacity
                       style={mainStyles.loginForm}
                        onChangeText={()=>setShowPicker(true)}>
                        <Text className="text-2xl text-emerald-500">Appointment Date & Time:</Text>
                        <Text className="text-3xl font-bold">{date.toLocaleDateString()}</Text>
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
                      <View style={{display:"flex", flexDirection:"row", gap:80,justifyContent:"center",padding:20}}>
                        <TouchableOpacity style={mainStyles.dateandtimepicker} onPress={ShowDatepicker}><Text className="font-bold text-center text-white">Select Date</Text></TouchableOpacity>
                        <TouchableOpacity style={mainStyles.dateandtimepicker} onPress={ShowTimepicker}><Text className="font-bold text-center text-white"> Select Time</Text></TouchableOpacity>
                      </View>
                  </View>
                    <View style={{justifyContent:"center"}}>
                    <Text style={mainStyles.inputText}>Special request:</Text>
                    <TextInput
                    style={mainStyles.SpecialRequest}
                    placeholder="enter your special request "
                    />
                  </View>
              </View>

                <View style={{paddingHorizontal:10,}}>
                <TouchableOpacity  style={{ height:55,backgroundColor:themeColors.darkGreen,padding:5, borderRadius: 100,  justifyContent:"center", alignItems: "center" }}>
                  <Link href={("/(tabs)")} >
                  <Text className="text-2xl text-bold text-white font-mono font-extrabold">Book Appointment</Text></Link>
                </TouchableOpacity>
            </View>
             

         </ScrollView>
     
      </SafeAreaView>
   </SafeAreaProvider>
  );
}


