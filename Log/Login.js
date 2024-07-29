import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Authcontext from '../utils/Authcontext';
import ima1 from '../assets/back.png';
import axios from 'axios';
import { auth } from "../Server/firebaseConfig.js";

export default function Login({ navigation }) {
  const { Back_uri } = React.useContext(Authcontext);

  const [number, setNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  const sendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(number);
      setConfirm(confirmation);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirm.confirm(verificationCode);
      console.log('Phone number authenticated successfully');
    } catch (error) {
      console.error('Invalid code.');
    }
  };

  const registerNumber = async () => {
    try {
      await axios.post(`${Back_uri}/registerNo`, { number });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={ima1} style={styles.backImage}>
        <View style={styles.main}>
          <Text style={styles.text}>WhatSnap</Text>
        </View>
        <View style={styles.numberBar}>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={setNumber}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            returnKeyType='send'
            placeholderTextColor="#FFFFFF"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              registerNumber();
              sendOTP();
              navigation.navigate('Otp');
            }}
          >
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numberBar: {
    backgroundColor: '#707070',
    height: 60,
    width: '90%',
    borderRadius: 25,
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 120,
  },
  input: {
    fontSize: 18,
    color: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    width: '50%',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#707070',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
