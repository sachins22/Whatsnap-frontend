import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import WhatFront from "./WhatFront"
import Authcontext from "../utils/Authcontext";

export default function Chat() {
  const {CHATS}= useContext(Authcontext)
  // console.log(ChatsData)
  const [searchText, setSearchText] = useState('');

  const filteredChats = CHATS.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );
// console.log(filteredChats)
  return (
    <>
      <FlatList
        data={filteredChats}
        renderItem={({item}) => <SingleChatCard data={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<WhatFront searchText={searchText} setSearchText={setSearchText} />}
      />
      
    </>
  );
}

 export const SingleChatCard = ( {data} ) => {
  // console.log("single",data);
  const navigation = useNavigation();
  return (
    <>
    <TouchableOpacity onPress={() => navigation.navigate('InnerChat' , {
      data
    })}
    onLongPress={deleteFun}>
     <View style={styles.chatsMain}>
        <View style={styles.chatsImage}>
            <Image source={{ uri: data.profile }} style={styles.image} />
        </View>
        <View style={styles.chatText}>
            <View style={styles.chatsTextName}>
                <Text style={styles.nameText}>
                  {data.name}</Text>
            </View>
            <View style={styles.chatsTextMessage}>
                <Text style={styles.messageText}>{data.lastMessage}</Text>
            </View>
        </View>
        <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{data.time}</Text>
        </View>
    </View>
    </TouchableOpacity>
    </>
  );
};

const deleteFun=()=>{
 alert('delete a chat')
}

const styles = StyleSheet.create({
  chatsMain: {
    width: "99%",
    height: 70,
    borderRadius: 25,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
    marginBottom: 10,
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
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
},
chatsTextName: {
    fontWeight: "bold",
    marginBottom: 5
},
chatsTextMessage: {
    fontWeight: "300",
},
nameText: {
    fontWeight: "bold",
    color:"white"
},
messageText: {
    fontWeight: "300",
    color:"white"
},
timeContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
},
timeText: {
    fontSize: 12,
    // color: "#888",
    color:"white"
},
});

