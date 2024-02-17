import { StyleSheet,Platform } from "react-native";


const styles =StyleSheet.create({
container:{

},
imageBackground:{
    height:"100%", 
    paddingHorizontal:20,
    alignItems:'center',

},
foodImage:{
    height:50,
    width:90,
    position:"absolute", 
    resizeMode:'stretch', 
    top:Platform.OS == "android"?20:50,
right:20

}, 
title:{
    fontSize:40,
    color:"#fff", 
    marginTop:Platform.OS == "android" ?60:110,
    fontFamily:"Audiowide-Regular"
},
inputsContainer:{
    height:450, 
    width:"100%", 
    backgroundColor:"#fff",
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    paddingHorizontal:20
},
textDontHave:{
    alignSelf:"flex-end",
    marginRight:10,
    color:"#000",
    marginBottom:15,
    fontFamily:"NovaFlat-Regular"

},
orStyle:{
    fontSize:20,
    color:"gray",
    marginTop:20,
fontFamily:"Audiowide-Regular"
}
}); 
export default styles;