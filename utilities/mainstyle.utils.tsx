import { StatusBar, StyleSheet } from "react-native";
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
    wrapper:{
        flex:1,
        display:"flex",
        justifyContent:"space-between",
        paddingTop:StatusBar.currentHeight,
        

     
        
    },
    inputTextview:{
        flex:1,
        display:"flex",
        gap:9,
        paddingVertical:10,
        paddingHorizontal:5,
        paddingTop:30

     
        
    },
    inputText:{
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

    alreadyText: {
        color:"black"
    },
     already: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        gap: 5,
    },
    
    alreadyLink: {
        color: themeColors.darkGray,
        fontWeight: "bold",
    },
    signInBtn:{
        height:56,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:14,
        backgroundColor:themeColors.darkGreen,
        borderRadius:10
    },
    signInText:{
        color:"white",
        fontSize:22,
    },
    orSec:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    line:{
        width:"30%",
        borderTopWidth:1,
        borderTopColor:themeColors.darkGray
    },
    orText:{
        fontSize:16,
        color:themeColors.darkGray
    },
    bodyText:{
        color:themeColors.darkGray,
        fontSize:18,
        textAlign:"center"
    },
    ScrollViewContainer: {
        flexGrow: 1,
        justifyContent: "space-between",
        marginBottom: 40,
    },
})