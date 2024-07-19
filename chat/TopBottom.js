import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Chat from "./Chat.js"
import {  MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TopBottom() {
  const navigation = useNavigation() 

  function Addcontact(){
    navigation.navigate('Addcontact')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatsContainer}>
        <Chat />
      </View>
      <View style={styles.fourthMain}>
        <TouchableOpacity style={styles.fourthMainButton} onPress={Addcontact} >
        <MaterialIcons name="add-comment" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  chatsContainer: {
    flex: 1,
  },
  bottomContainer: {
    height: 80,
  },
  fourthMain: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 20,
    // left: 20,
    right:28
  },
  fourthMainButton: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
  },
});