import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyButton = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.title}>{title}</Text>
   </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    container:{
        height:50,
         width:"100%", 
         justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:"#ff0036", 
    borderRadius:30,
    },
    title:{

        color:"#fff", 
        fontSize:20,
        fontFamily:"Redressed-Regular"
    }
})