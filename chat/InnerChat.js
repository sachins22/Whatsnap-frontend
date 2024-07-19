import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, StatusBar, Modal, Pressable, FlatList } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, AntDesign, Entypo, Ionicons, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import img1 from '../assets/innerChat.png';
import img2 from '../assets/icon.png';
import { useNavigation } from '@react-navigation/native';
import Emojis from './Emojis';
const emojis = Emojis




export default function InnerChat({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="gray" />
        <ImageBackground source={img1} style={styles.backImage}>
          <View style={styles.main}>
            <View style={styles.profile}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
              <Image source={{ uri: data.profile }} style={styles.image} />
              <Text style={styles.userName}>{data.name}</Text>
            </View>
            <View style={styles.threeIcon}>
              <TouchableOpacity>
                <Feather name="video" size={24} color="white" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="call-outline" size={24} color="white" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="white" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <BottomPage />
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

function BottomPage() {
  const [icon, setIcon] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  return (
    <View style={styles.bottomMain}>
      <View style={styles.bottomInput}>
        
        <TouchableOpacity style={styles.iconMargin} onPress={()=>setEmojiPickerVisible(true)}>
          <Entypo name="emoji-happy" size={18} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message"
          value={icon}
          onChangeText={(text) => setIcon(text)}
        />
        <TouchableOpacity style={styles.iconMargin}>
          <AntDesign name="link" size={18} color="gray"  onPress={() => setModalVisible(true)}/>
        </TouchableOpacity>
        {icon.trim().length === 0 && (
          <TouchableOpacity style={styles.iconMargin}>
            <MaterialCommunityIcons name="camera-outline" size={18} color="gray" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomButton}>
        <TouchableOpacity>
          {icon.trim().length > 0 ? (
            <FontAwesome name="send-o" size={24} color="white" />
          ) : (
            <Feather name="mic" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.containerIcon}>
                <View style={styles.IconText1}>
              <View style={styles.Ficon}>
                <Pressable onPress={alertFunDO}>
                  <Ionicons name="document-text-sharp" size={24} color="white" />
                </Pressable>
              </View>
                <Text style={styles.iconText}>Document</Text>
                </View>
                <View style={styles.IconText1}>
              <View style={styles.Sicon}>
                <Pressable onPress={alertFunC}>
                  <MaterialCommunityIcons name="camera-outline" size={24} color="white" />
                </Pressable>
              </View>
                <Text style={styles.iconText}>Camera</Text>
                </View>
                <View style={styles.IconText1}>
              <View style={styles.THicon}>
                <Pressable onPress={alertFunG}>
                  <FontAwesome5 name="images" size={24} color="white" />
                </Pressable>
              </View>
                <Text style={styles.iconText}>Gallery</Text>
                </View>
                <View style={styles.IconText1}>
              <View style={styles.FRicon}>
                <Pressable onPress={alertFunAu}>
                  <MaterialCommunityIcons name="headphones" size={24} color="white" />
                </Pressable>
              </View>
                <Text style={styles.iconText}>Audio</Text>
                </View>
                <View style={styles.IconText1}>
              <View style={styles.FVicon}>
                <Pressable onPress={alertFunLO}>
                  <Ionicons name="location-sharp" size={24} color="white" />
                </Pressable>
              </View>
                <Text style={styles.iconText}>Location</Text>
                </View>
                <View style={styles.IconText1}>
              <View style={styles.SXicon}>
                <Pressable onPress={alertFunCo}>
                  <Entypo name="user" size={24} color="white" />
                </Pressable>
              </View>
                <Text style={styles.iconText}>Contact</Text>
            </View>
            </View>
          </View>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={emojiPickerVisible}
        onRequestClose={() => setEmojiPickerVisible(false)}
      >
        <View style={styles.centeredView2}>
          <View style={styles.modalView2}>
            <FlatList
              data={emojis}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  setIcon(icon + item);
                  setEmojiPickerVisible(false);
                }}>
                  <Text style={styles.emoji}>{item}</Text>
                </TouchableOpacity>
              )}
              numColumns={8}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const alertFunDO =()=>{
  alert("press the button docement")
}
const alertFunC =()=>{
  alert("press the button Camera")
}
const alertFunG =()=>{
  alert("press the button Gallery")
}
const alertFunAu =()=>{ 
  alert("press the button Audio")
}
const alertFunLO =()=>{
  alert("press the button Location")
}
const alertFunCo =()=>{
  alert("press the button Contact")
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  main: {
    height: 80,
    width: '100%',
    backgroundColor: '#111B2101',
    borderBottomColor: 'white',
    borderWidth: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  threeIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  bottomMain: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    flex: 1,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  bottomButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#006400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMargin: {
    marginHorizontal: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 18,
    marginBottom:48
  },
  modalView: {
    margin: 20,
    width:"95%",
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 22
    marginBottom:50,
  },
  modalView2: { 
    margin: 20,
    width:"100%",
    height:"45%",
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 1,
    // elevation: 5,
    // width: '90%', // Adjust the width as needed
    // height: '50%', // Adjust the height as needed
  },
  emoji: {
    fontSize: 24,
    padding: 10,
    textAlign: 'center',
  },
  containerIcon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  IconText1:{
    // flex:1,
    marginBottom:20
  },
  Ficon: {
    alignItems: 'center',
    justifyContent:"center",
    margin: 10,
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"blue"
  },
  Sicon: {
    alignItems: 'center',
    justifyContent:"center",
    margin: 10,
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"red"
  },
  THicon: {
    alignItems: 'center',
    justifyContent:"center",
    margin: 10,
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"green"
  },
  FRicon: {
    alignItems: 'center',
    justifyContent:"center",
    margin: 10,
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"indigo"
  },
  FVicon: {
    alignItems: 'center',
    justifyContent:"center",
    margin: 10,
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"#C71585"
  },
  SXicon: {
    alignItems: 'center',
    justifyContent:"center",
    margin: 10,
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"orange"
  },
  iconText: {
    marginTop: 2,
    textAlign: 'center',
  },
});

