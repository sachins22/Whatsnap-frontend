import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons, Entypo, EvilIcons, MaterialIcons } from '@expo/vector-icons';



export default function Calls() {
  const [modalVisible, setModalVisible] = useState(false);




  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.mainText}>Calls</Text>
        <View style={styles.mainIcon}>
          <TouchableOpacity accessibilityLabel="Scan QR Code">
            <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Open Camera">
            <Ionicons name="camera-outline" size={24} color="white" style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Search">
            <EvilIcons name="search" size={24} color="white" style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="More Options" onPress={toggleModalVisibility}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondaryMain}>
        <TouchableOpacity>
          <View style={styles.secondaryMainText}>
            <View style={styles.secondaryMainIcon}>
              <Ionicons name="link" size={24} color="white" />
            </View>
            <View style={styles.statusTextContainer}>
              <Text style={styles.secondaryMainTextFirst}>Create Call link</Text>
              <Text style={styles.secondaryMainTimeFirst}>Share a link For WhatSnap call</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.thirdMain}>
        <Text style={styles.thirdMainText}>Recent</Text>
      </View>
      <View style={styles.fourthMain}>
        <TouchableOpacity style={styles.fourthMainButton}>
          <MaterialIcons name="add-call" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Modal
       
       animationType="slide"
       transparent={true}
       visible={modalVisible}
       onRequestClose={toggleModalVisibility}
     >
       <View style={styles.centeredView}>
         <View style={styles.modalView}>
           <View style={styles.textContainer}>
             <TouchableOpacity 
             onPress={()=>alert('Clear call log button pressed')}
             >
               <Text style={styles.modalText}>Clear call log</Text>
             </TouchableOpacity>

             <TouchableOpacity 
             onPress={()=>alert('Settings button pressed')}
             >
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
    backgroundColor: 'black',
  },
  main: {
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  mainIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 22,
  },
  secondaryMain: {
    padding: 10,
  },
  secondaryMainIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryMainText: {
    width: '100%',
    height: 90,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333',
  },
  statusTextContainer: {
    marginLeft: 10,
  },
  secondaryMainTextFirst: {
    fontSize: 18,
    color: 'white',
  },
  secondaryMainTimeFirst: {
    fontSize: 16,
    color: 'white',
  },
  thirdMain: {
    padding: 10,
  },
  thirdMainText: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 8,
  },
  fourthMain: {
    position: 'absolute',
    bottom: 20,
    right: 28,
  },
  fourthMainButton: {
    width: 60,
    height: 60,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
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
