import { default as Index, default as IndexHome } from '@/app';
import BookAp from '@/app/(tabs)/appointment';
import APhistory from '@/app/(tabs)/appointment-history';
import Settings from '@/app/(tabs)/settings';
import Login from '@/app/login';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

 export default function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="index" component={Index}/>
            <Stack.Screen name="appointment" component={BookAp}/>
            <Stack.Screen name="appointment-history" component={APhistory}/>
            <Stack.Screen name="settings" component={Settings}/>
            <Stack.Screen name="index" component={IndexHome}/>
             <Stack.Screen name="login" component={Login}/>
            

        </Stack.Navigator>
    )
};