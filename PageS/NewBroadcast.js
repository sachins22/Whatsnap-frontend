import React, { useContext, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Authcontext from "../utils/Authcontext";






export default function NewBroadcast() {

  const {CHATS}= useContext(Authcontext)
  const navigation = useNavigation()
  const [chatList, setChatList] = useState([]);

  const   Goback = function(){
    navigation.navigate('Home')
  }



  const addToGroup = (data) => {
    const index = chatList.indexOf(data.id);
    if (index === -1) {
      setChatList([...chatList, data.id]);
    } else {
      setChatList(chatList.filter(id => id !== data.id));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View style={styles.main}>
          <TouchableOpacity accessibilityLabel="arrowleft" style={styles.iconSpacing}  onPress={Goback}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.mainText}>New Broadcast</Text>
            {chatList!=0?
            <>
            <Text style={styles.mainText1}>{chatList.length} of {CHATS.length} selected</Text>
            </>
            :<>
            <Text style={styles.mainText1}>Add members</Text>
            </>}
          </View>
        </View>

        <View style={styles.mainIcon}>
          <TouchableOpacity accessibilityLabel="Search">
            <EvilIcons name="search" size={24} color="white" style={styles.iconSpacing} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ShowProfile}>
        <FlatList
          data={chatList}
          keyExtractor={(item) => item.toString()}
          horizontal
          renderItem={({ item }) => {
            const profile = CHATS.find(chat => chat.id === item);
            return (
              <View key={item} style={styles.profileContainer}>
                <Image source={{ uri: profile.profile }} style={styles.profileImage} />
                <TouchableOpacity onPress={() => addToGroup(profile)} style={styles.removeProfileButton}>
                  <AntDesign name="closecircle" size={16} color="gray" />
                </TouchableOpacity>
                <Text style={styles.profilename}>{profile.name}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.thirdMain}>
        {/* <Text style={styles.thirdMainText}>Contact on WhatSnap</Text> */}
        <FlatList
          data={CHATS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const isSelected = chatList.includes(item.id);
            return (
              <Pressable onPress={() => addToGroup(item)}>
                <View style={styles.thirdMainContent}>
                  <Image source={{ uri: item.profile }} style={styles.thirdMainImage1} />
                  <View style={styles.statusTextContainer}>
                    <Text style={styles.secondaryMainTextFirst}>{item.name} 
                      {/* In: {chatList.includes(item.id) ? "yes" : ""} */}
                       </Text>
                    <Text style={styles.secondaryMainTimeFirst}>{item.time}</Text>
                  </View>

{
  isSelected &&(
    <AntDesign name="checkcircle" size={24} color="green" style={styles.checkIcon} />
  )
}
                </View>
              </Pressable>
            );
          }}
        />
      </View>
      <View style={styles.fourthMain1}>
        <TouchableOpacity style={styles.fourthMainButton2}>
          <AntDesign name="arrowright" size={24} color="black" />
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
    width: '80%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  text: {
    flexDirection: "column"
  },
  mainText1: {
    fontSize: 14,
    color: 'white',
  },
  mainIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 22,
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
  },
  thirdMainImage1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusTextContainer: {
    marginLeft: 10,
  },
  secondaryMainTextFirst: {
    fontSize: 18,
    color: 'white',
  },
  secondaryMainTimeFirst: {
    fontSize: 14,
    color: 'gray',
  },
  fourthMain1: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 20,
    right: 18,
  },
  fourthMainButton2: {
    width: 60,
    height: 60,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ShowProfile: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profilename: {
    fontSize: 12,
    color: 'white',
  },
  checkIcon: {
    left:100
    
  }
});
