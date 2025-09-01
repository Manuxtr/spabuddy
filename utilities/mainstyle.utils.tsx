import { StyleSheet } from "react-native";
import { themeColors } from "./maincolors.utils";



export const mainStyles=StyleSheet.create({
    loginForm:{
        width:"100%",
        borderWidth:2,
        borderColor:themeColors.darkGreen,
        paddingHorizontal:16,
        paddingVertical:20,
        fontSize:16,
        borderRadius:15,
        
    },
    textarea:{
     
        
    },
    inputTextview:{
        paddingVertical:10,
        paddingHorizontal:5,
     
        
    },
    inputText:{
        fontSize:24,
        fontWeight:"700",
        color:"#50C878"
        

    }
    ,
    SpecialRequest:{
        width:"100%",
        borderWidth:1,
        borderColor:themeColors.darkGreen,
        // paddingHorizontal:106,
        paddingVertical:15,
        borderRadius:10,
    },
    dateandtimepicker:{
        backgroundColor:themeColors.darkGreen,
        borderRadius:8,
        paddingHorizontal:6,
        paddingVertical:20,
        width:100,
        height:55},
})