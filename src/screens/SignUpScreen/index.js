import { View, Text, ImageBackground, Image,pla, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import MyButton from '../../components/MyButton'
import MyTextinput from '../../components/MyTextinput'
import SocialMedia from '../../components/SocialMedia'
import auth from "@react-native-firebase/auth"
export default function SignUpScreen({navigation}) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("") 

    const signUpTestFn=()=>{
auth().createUserWithEmailAndPassword(email,password).then(()=>{
  Alert.alert("User Created with those credentials Please Login ")  ;
navigation.navigate("Login")
})
.catch((err)=>{
    console.log(err.message);
    Alert.alert(err.message)
})
    }
  
  
  return (
    <View style={styles.container}>
   <ImageBackground source={require("../../assets/background.png")}
   style={styles.imageBackground} >
<Image source={require("../../assets/food/food.png")} style={styles.foodImage}/>

<Text style={styles.title}>Fatmore</Text>
<View style={styles.inputsContainer}>
<MyTextinput value={email} onChangeText={text=>setEmail(text)} placeholder="Enter E-mail or User Name"/>
<MyTextinput value={password} onChangeText={text=>setPassword(text)} placeholder="Paassword" secureTextEntry/>
<MyTextinput value={confirmPassword} onChangeText={text=>setConfirmPassword(text)} placeholder="Confirm Paassword" secureTextEntry/>
<MyButton onPress={signUpTestFn} title={"Sign Up"}/>
<Text style={styles.orStyle}>OR</Text>
<SocialMedia/>
</View>

   </ImageBackground>
    </View>
  )
}