import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/SocialMediaIcons/facebook.png")} 
      style={styles.imageSocial}
      />
      <Image source={require("../assets/SocialMediaIcons/twitter.png")}
      
      style={styles.twitterIcon}
      />
      <Image source={require("../assets/SocialMediaIcons/google.png")}
      style={styles.imageSocial}
      />
      
    </View>
  )
}

export default SocialMedia

const styles = StyleSheet.create({
    imageSocial:{
        height:40,
        width:40,
    
    },
    twitterIcon:{height:60,width:60,marginTop:15},
    container:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        width:"100%",
        alignItems:"center"
    }
})