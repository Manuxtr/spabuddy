import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";




export default function _Layout(){
    return(
        <Tabs
        screenOptions= {{
            tabBarActiveTintColor:"green",
            headerShown:false
        }}>

            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                tabBarIcon: ({}) => <MaterialCommunityIcons name="home-export-outline" size={24} color="black" />
                    
                }}/>

            <Tabs.Screen
                name="appointment"
                options={{
                    title: "Appointments",
                    headerShown:false,
                tabBarIcon:({}) => <MaterialIcons name="add-task" size={34} color="black"  /> 
                    
                }}/>

            <Tabs.Screen
                name="appointment-history"
                options={{
                    title: "Appointment History",
                    headerShown: false,
                    tabBarIcon: ({}) => <MaterialCommunityIcons name="folder-settings-outline" size={24} color="black" />
                    
                    
                }}/>

            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    headerShown: false,
                    tabBarIcon: ({}) => <MaterialIcons name="perm-data-setting" size={24} color="black" />
                    
                }}/>
        </Tabs>
    )
}