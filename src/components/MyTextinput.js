import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MyTextinput = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput  style={styles.input}
      {...props}
      />
      <View style={styles.border}></View>
    </View>
  )
}

export default MyTextinput

const styles = StyleSheet.create({

    container:{
        height:50,
        width:"100%", 
        justifyContent:'center',
        paddingHorizontal:10,
        marginBottom:20
    },
    input:{
       width:"100%", 
       height:50, 
       marginBottom:20
    },
    border:{
        width:"100%", 
        backgroundColor:"gray", 
        height:1,
        alignSelf:"center"
    }
})