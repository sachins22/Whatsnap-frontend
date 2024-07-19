import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import img22 from "../assets/agree.png"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';



export default function Agree() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={img22} style={styles.backImg}>
          <View style={styles.overlay}></View>
          <View style={styles.main}>
            <View >
          <Text style={styles.mainText} >Welcome to WhatSnap</Text>
            </View>
            <View style={styles.TextFolder} >
          <Text style={styles.Text}>Read our <TouchableOpacity ><Text style={{color:"blue"}}>Privacy Policy</Text></TouchableOpacity>.Tap "Agree and Continue" to</Text>
          <Text style={styles.Text}>accept the <TouchableOpacity ><Text style={{color:"blue"}}>Terms of service</Text></TouchableOpacity>.</Text>
            </View>
              <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Login')}>
            <View style={styles.Buttontext}>
               <Text >Agree and Continue</Text>
            </View>
              </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(144, 238, 144, 0.7)', // Light green color with 50% opacity
  },
  main: {
    position: 'absolute', 
    top:"55%",
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00B5E2',
  },
 
Button:{
  width:250,
  height:55,
  backgroundColor:"green",
  borderRadius:25,
  justifyContent: 'center',
  alignItems: 'center',
},
Buttontext:{
  fontWeight:"bold"
},
TextFolder:{
  marginVertical:12
},
Text:{
  fontStyle:"italic",
  fontSize:16,
  fontWeight:"bold",
  // marginVertical:10
}
})
