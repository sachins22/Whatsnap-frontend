import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';





export default function Test() {

  const [phoneNumber, setPhoneNumber] = useState('');

  const addPhoneNumber = () => {
    axios.post('http://192.168.1.16:8000/api/registerNo', { // replace with your server's actual address and endpoint
      phoneNumber: phoneNumber,
    })
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      if (error.response) {
        console.log('Server responded with a status other than 2xx:', error.response.status);
        console.log('Data:', error.response.data);
      } else if (error.request) {
        console.log('No response received:', error.request);
      } else {
        console.log('Error setting up the request:', error.message);
      }
    });
  };

  return (
    <SafeAreaView>
    <View>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />
      <Button title="Add Phone Number" onPress={addPhoneNumber} />
    </View>
    </SafeAreaView>
  );
};



