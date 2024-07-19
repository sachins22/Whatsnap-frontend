import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,ScrollView, } from "react-native";

import { MaterialCommunityIcons, Ionicons, Entypo, FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BottomPage() {
  const navigation = useNavigation();
  return (
    <>
    <View style={styles.bottomMain}>
      <View style={styles.bottomIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TopBottom')}>
          <MaterialCommunityIcons name="android-messages" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.bottomText}>Chats</Text>
      </View>
      <View style={styles.bottomIconContainer}>
        <TouchableOpacity>
          <FontAwesome6 name="spinner" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.bottomText}>Updates</Text>
      </View>
      
      <View style={styles.bottomIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
        <FontAwesome6 name="map-location-dot" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.bottomText} >ON MAP</Text>
      </View>

      <View style={styles.bottomIconContainer}>
        <TouchableOpacity>
          <Ionicons name="call-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.bottomText}>Calls</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({

  bottomMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:"97%",
    height:80,
    borderRadius:25,
    padding:10,
    borderBlockStartColor:"black"
    // borderTopColor:"black",
  },
  bottomIconContainer: {
    alignItems: "center",
  },
  bottomText: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
  },
});

