import {  FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useContext } from 'react'
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import Authcontext from "../utils/Authcontext";
import { useNavigation } from '@react-navigation/native';   


export default function Addcontact() {
    const {CHATS}= useContext(Authcontext)
    const navigation = useNavigation() 


  

    function   Goback(){
        navigation.goBack()
    }
    
  return (
    <SafeAreaView style={styles.Container}>
    <View style={styles.Main}>
<View style={styles.FirstMain}>
  <TouchableOpacity onPress={Goback}>
<AntDesign name="arrowleft" size={24} color="white" />
</TouchableOpacity>
<View style={styles.FMT}>
<Text style={styles.FirstMainText}>
  Select Contact
</Text>
<Text style={styles.FirstMainText2}>{CHATS.length} Contact</Text>
</View>
<TouchableOpacity>
<Feather name="search" size={24} color="white" />
</TouchableOpacity>
<TouchableOpacity>
<Entypo name="dots-three-vertical" size={24} color="white" />
</TouchableOpacity>
</View>
  <View style={styles.FourthMain}>
<FlatList
data={CHATS}
renderItem={({item})=> <InnerChatCard data={item}/>}
keyExtractor={item => item.name}
ListHeaderComponent={TopPage}
/>
  </View>
    </View>
    </SafeAreaView>
  )
}

const TopPage =()=>{
    const navigation = useNavigation() 

 function RenderGroup(){
    navigation.navigate("Group")
 }   


 function AddCont(){
  navigation.navigate('AddCont')
 }

  return(
    <>
     <View style={styles.SecMain}>
{/* <View style={styles.SecMainButton}> */}
  <TouchableOpacity style={styles.SecMainButton} onPress={RenderGroup} >
  <View style={styles.SecMainButtonIcons}>
  <AntDesign name="addusergroup" size={24} color="white" />
  </View>
<Text style={styles.SecMainButtonText}>
  New Group
</Text>
  </TouchableOpacity>
{/* </View> */}
<View style={styles.SMT2}>
  <TouchableOpacity style={styles.SecMainButton2}  >
  <View style={styles.SecMainButton2Icons} >
  <AntDesign name="adduser" size={24} color="white" />
  </View>
<Text style={styles.SecMainButtonText2} onPress={AddCont}>
  New Contact
</Text>
  </TouchableOpacity>
<TouchableOpacity style={styles.SecMainButton2Icons2}>
<Ionicons name="qr-code-outline" size={24} color="white" />
</TouchableOpacity>
</View>
  </View>
  <View style={styles.ThirdMain}>
    <Text style={styles.ThirdMainText}> 
      Contact on WhatSnap
    </Text>
  </View>
    </>
  )
}









const InnerChatCard = ( {data} ) => {
  // console.log("single",data);
  const navigation = useNavigation();
  return (
    <>
    <TouchableOpacity 
    onPress={() => navigation.navigate('InnerChat' , {
      data
    })}
  >
     <View style={styles.chatsMain}>
        <View style={styles.chatsImage}>
            <Image source={{ uri: data.profile }} style={styles.image} />
        </View>
        <View style={styles.chatText}>
            <View style={styles.chatsTextName}>
                <Text style={styles.nameText}>
                  {data.name}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
    </>
  );
};



const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  Main: {
    flex: 1,
  },
  FMT: {
    flexDirection: "column",
    alignItems: "center"
  },
  FirstMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 15,
  },
  FirstMainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  FirstMainText2: {
    color: 'white',
    fontSize: 14,
  },
  SecMain: {
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1a1a1a',
  },
  SecMainButton: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 10,
  },
  SecMainButtonIcons: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  SecMainButtonText: {
    color: 'white',
    fontSize: 16,
  },
 SMT2: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 10,
  },
  SecMainButton2: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 10,
  },
  SecMainButton2Icons: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  SecMainButtonText2: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  SecMainButton2Icons2:{
    left:150
  },
  ThirdMain: {
    padding: 10,
    backgroundColor: '#1a1a1a',
  },
  ThirdMainText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  FourthMain: {
    flex: 1,
  },
  chatsMain: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#333',
  },
  chatsImage: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatText: {
    flex: 1,
  },
  chatsTextName: {
    marginBottom: 5,
  },
  nameText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});