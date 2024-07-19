import React, { useContext, useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import img22 from '../assets/agree.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons, Entypo, EvilIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import Authcontext from '../utils/Authcontext';

export default function Updates() {
const {CHATS} = useContext(Authcontext)
const [modalVisible, setModalVisible] = useState(false);




const toggleModalVisibility = () => {
  setModalVisible(!modalVisible);
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.mainText}>Updates</Text>
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
          <Text style={styles.secondaryMainText}>Status</Text>
          <View style={styles.secondaryMainText1}>
            <Image source={img22} style={styles.secondaryMainTextImage} />
            <View style={styles.statusTextContainer}>
              <Text style={styles.secondaryMainTextFirst}>My Status</Text>
              <Text style={styles.secondaryMainTimeFirst}>Today 9:22 AM</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.thirdMain}>
          <Text style={styles.thirdMainText}>Recent Updates</Text>


        <FlatList 
        data={CHATS}
        renderItem={({item}) => {
          
          var date = new Date().setHours(Math.random(1,12) , Math.random(0,59));date = new Date(date).toLocaleTimeString();
          return(
            
            <TouchableOpacity>

          <View style={styles.thirdMainContent}>
            <Image source={{ uri : item.profile}} style={styles.thirdMainImage1} />
            <View style={styles.statusTextContainer}>
              <Text style={styles.secondaryMainTextFirst}>{item.name}</Text>
              <Text style={styles.secondaryMainTimeFirst}>{date}</Text>
            </View>
          </View>
        </TouchableOpacity>
                  )}
        }
        />
      </View>
      <View style={styles.fourthMain}>
        <TouchableOpacity style={styles.fourthMainButton}>
          <Octicons name="pencil" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.fourthMain1}>
      <TouchableOpacity style={styles.fourthMainButton2}>
          <MaterialIcons name="photo-camera" size={24} color="black" />
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
              onPress={()=>alert('Status privacy button pressed')}
              >
                <Text style={styles.modalText}>Status privacy</Text>
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
  secondaryMainTextImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  secondaryMainText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
  },
  secondaryMainText1: {
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
    color: 'gray',
  },
  thirdMain: {
    padding: 10,
  },
  thirdMainText: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 8,
  },
  thirdMainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    // backgroundColor: '#333',
  },
  thirdMainImage1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fourthMain: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 105,
    // left: 20,
    right:30
  },
  fourthMain1: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 20,
    // left: 20,
    right:18
  },
  fourthMainButton: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
  },
  fourthMainButton2: {
    width: 60,
    height: 60,
    borderRadius: 20,
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

