import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Authcontext from '../utils/Authcontext';
import axios from 'axios';


export default function Name() {
  const navigation = useNavigation();

const {setloggedIn} = useContext(Authcontext)
const {Back_uri}=useContext(Authcontext)
const [firstname ,setfirstname] = useState("")
const [lastname ,setlastname] = useState("")

const Firstname = async ()=>{
  try {
    await axios.post(`${Back_uri}/NameAdd`,{firstname,lastname})
    
  } catch (error) {
    console.error(error);
  }
}


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Enter Your Name</Text>

        <TextInput style={styles.input} 
         value={firstname}
         onChangeText={setfirstname}
        placeholder="First Name"
         placeholderTextColor="#aaa" 
         />

        <TextInput style={styles.input}
        value={lastname}
        onChangeText={setlastname}
         placeholder="Last Name"
          placeholderTextColor="#aaa"
           />

        {/* <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}> */}
        <TouchableOpacity style={styles.button} onPress={()=>{
          Firstname()
          setloggedIn(true)}}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#aaa',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#25D366',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
