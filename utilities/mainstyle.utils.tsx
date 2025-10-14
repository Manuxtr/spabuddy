import { StatusBar, StyleSheet } from "react-native";
import { themeColors } from "./maincolors.utils";



export const mainStyles=StyleSheet.create({
<<<<<<< HEAD
    loginForm:{
        width:"100%",
        borderWidth:2,
        borderColor:themeColors.darkGreen,
        paddingHorizontal:16,
        paddingVertical:16,
        fontSize:16,
        borderRadius:15,
        
    },
=======
>>>>>>> master
    wrapper:{
        flex:1,
        display:"flex",
        justifyContent:"space-between",
        paddingTop:StatusBar.currentHeight,  
    },
    inputTextview:{
        flex:1,
<<<<<<< HEAD
        display:"flex",
        gap:2,
        paddingHorizontal:5,
        paddingBottom:50

     
        
    },
    inputText:{
        color:"#50C878"

=======
        // display:"flex",
        gap:9,
        paddingVertical:5,
        paddingHorizontal:35,
        paddingTop:30  
    },
    inputText:{
        color:"#50C878"
>>>>>>> master
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
        gap: 9,
        
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
        textAlign:"center",
        paddingBottom:40
        
    },
    ScrollViewContainer: {
        flexGrow: 1,
        justifyContent: "space-between",
        marginBottom: 40,
    },
    errorMessage:{
        color:"red"
    },
    passwordV:{
      width:"100%",
      position:"relative",
      borderWidth:1,
      borderColor:themeColors.darkGreen,
      paddingHorizontal:10,
      paddingVertical:18,
      borderRadius:15, 
      marginTop:10
    },
    input:{
       flex:1,
       paddingRight:50,
       fontSize:18,
      
    },
    eye:{
        position:"absolute",
        right:15,
        top:0,
        bottom:0,
        justifyContent:"center"

    },
        loginForm:{
        width:"100%",
        borderWidth:1,
        borderColor:themeColors.darkGreen,
        paddingHorizontal:16,
        paddingVertical:20,
        fontSize:16,
        borderRadius:15, 
    },
  
    
})