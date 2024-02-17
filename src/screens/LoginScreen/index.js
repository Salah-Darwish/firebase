import { View, Text, ImageBackground, Image, Alert, Button } from 'react-native'
import React,{useEffect, useState} from 'react'
import styles from './styles'
import MyButton from '../../components/MyButton'
import MyTextinput from '../../components/MyTextinput'
import SocialMedia from '../../components/SocialMedia'
import auth from "@react-native-firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
export default function LoginScreen({navigation}) {
   const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    useEffect(()=>{
GoogleSignin.configure({
      webClientId:'142363280702-3rea0ir3liu30ker59rf4jm24jc0r3q0.apps.googleusercontent.com',
});
    },[])
    async function onGoogleButtonPress() {
      try {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken,user } = await GoogleSignin.signIn();
console.log(user);
Alert.alert("Success Login")
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
catch(error){
  console.log(error);
}
}
  const loginWithEmailAndPass=()=>{
    auth().signInWithEmailAndPassword(email,password)
    .then((res) =>{console.log(res)
    Alert.alert("Success:Logged In")
    navigation.navigate("Home")
    })
    .catch(err=>{
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
<MyTextinput value={email} onChangeText={text=>setEmail(text)}  placeholder="Enter E-mail or User Name"/>
<MyTextinput value={password} onChangeText={text=>setPassword(text)} placeholder="Paassword" secureTextEntry/>
<MyButton title={"Login"} onPress={loginWithEmailAndPass}/>
<Button title='Login with google' onPress={onGoogleButtonPress}/>
<Text style={styles.textDontHave}>Don't Have An Account Yet?</Text>
<Text style={styles.orStyle}>OR</Text>
<SocialMedia/>
</View>

   </ImageBackground>
    </View>
  )
}