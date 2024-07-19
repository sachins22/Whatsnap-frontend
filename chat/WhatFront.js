import React, { useState , useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Modal } from "react-native";
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function WhatFront({ searchText, setSearchText }) {
  const navigation = useNavigation(); // Initialize navigation
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const navigateToGroup = () => {
    navigation.navigate('Group');
  };
  const navigateToNewBroadcast = () => {
    navigation.navigate('NewBroadcast');
  };
  const navigateToStarted = () => {
    navigation.navigate('Started');
  };
  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };
  const navigateToTest = () => {
    navigation.navigate('Test');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity>
          <Text style={styles.text}>WhatSnap</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity accessibilityLabel="Scan QR Code" onPress={() => alert("Scan QR Code button pressed")}>
            <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" style={{ marginRight: 22 }} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Open Camera" onPress={() => navigation.navigate('Camera')}>
            <Ionicons name="camera-outline" size={24} color="white" style={{ marginRight: 22 }} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="More Options" onPress={toggleModalVisibility}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="🔍 Search..."
          returnKeyType="search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.buttonMain}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text>All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text>Unread</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button} >
            <Text>Groups</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        // ref={modalRef}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModalVisibility}

      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.textContainer}>
              <TouchableOpacity onPress={navigateToGroup}>
                <Text style={styles.modalText}>New groups</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToNewBroadcast}>
                <Text style={styles.modalText}>New broadcast</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToTest}>
                <Text style={styles.modalText}>Linked devices</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToStarted}>
                <Text style={styles.modalText}>Starred messages</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToSettings}>
                <Text style={styles.modalText}>Settings</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
  },
  icons: {
    flexDirection: "row",
  },
  searchBar: {
    padding: 7,
  },
  input: {
    width: "97%",
    height: 50,
    borderRadius: 25,
    // backgroundColor: "#D3D3D3",
    backgroundColor: "white",
    paddingLeft: 20,
    fontSize: 15,
  },
  buttonMain: {
    flexDirection: "row",
    paddingLeft: 10,
    marginVertical: 10,
  },
  button: {
    height: 30,
    borderRadius: 25,
    // backgroundColor: "#D3D3D3",
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  modalView: {
    margin: 20,
    width: "65%",
    // height:"60%",
    left: 57,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    
    marginBottom: 15,
  },
  modalText:{
    fontSize: 18,
    marginBottom: 20
  }
});
