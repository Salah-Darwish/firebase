
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import messaging from '@react-native-firebase/messaging';
import MyStack from './src/navigation/MyStack'

export default function App() {
  async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getToken= async()=>{
  const token =await messaging().getToken()
  console.log("Token = ",token);
}
useEffect(()=>{
requestUserPermission()
getToken()
},[])
  return (
    <NavigationContainer>
      <MyStack/>
      </NavigationContainer>
    
  )
}