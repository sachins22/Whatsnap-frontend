import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPImg from '../assets/otp.png';
import { Entypo } from '@expo/vector-icons';



export default function Otp({ navigation }) {
  function touchEvent() {
    alert('Button touched');
  }



function Name(){
  navigation.navigate('Name')
}

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={OTPImg} style={styles.backImage}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Verify Your Number</Text>
          <Text style={styles.subtitle}>Waiting for OTP</Text>
          <View style={styles.numberBar}>
            <TextInput
              style={styles.input}
              placeholder=" ___   ___  ___  ___ "
              keyboardType="numeric"
              returnKeyType='go'
              placeholderTextColor="#FFFFFF"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={Name}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't receive your code? <Text style={styles.resendLink}>Resend code</Text> in 10:1
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  numberBar: {
    backgroundColor: '#707070',
    height: 60,
    width: '90%',
    borderRadius: 25,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    height: 50,
    width: 150,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',  // Changed to black for better visibility
    marginBottom: "38%",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  resendLink: {
    fontWeight: 'bold',
  },
});

