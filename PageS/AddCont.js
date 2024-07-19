import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function AddCont() {

    const navigation = useNavigation()
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  function Goback(){
    navigation.goBack()
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.firstMain}>
          <TouchableOpacity onPress={Goback}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>New Contact</Text>
        </View>
        <View style={styles.secMain}>
          <FontAwesome5 name="user" size={24} color="white" />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#aaa"
            returnKeyType='go'
            value={firstname}
            onChangeText={item => setFirstname(item)}
          />
        </View>
        <View style={styles.secMain}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#aaa"
            returnKeyType='go'
            value={lastname}
            onChangeText={item => setLastname(item)}
          />
        </View>
        <View style={styles.fourthMain}>
          <Ionicons name="call-outline" size={24} color="white" />
          <TextInput
            style={styles.input}
            placeholder='Phone'
            placeholderTextColor="gray"
            keyboardType="numeric"
            value={phone}
            onChangeText={item => setPhone(item)}
          />
        </View>
        <View style={styles.fifthMain}>
          <AntDesign name="download" size={24} color="white" />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor="gray"
            returnKeyType='go'
            value={email}
            onChangeText={item => setEmail(item)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  main: {
    flex: 1,
    gap: 20,
    alignItems: 'flex-start',
  },
  firstMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginLeft: 10,
  },
  secMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  fourthMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  fifthMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#aaa',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginLeft: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    height: 40,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
