import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Foundation, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Authcontext from '../utils/Authcontext';

export default function Account() {
  const navigation = useNavigation();
  const {setloggedIn} = React.useContext(Authcontext);
function Goback(){
  navigation.goBack();
}

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.main}>
          <TouchableOpacity onPress={Goback}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Account</Text>
        </View>
        <View style={styles.item}  >
          <TouchableOpacity style={styles.itemContent} onPress={()=>alert('Button Pressed')}>
            <MaterialIcons name="security" size={24} color="white" />
            <Text style={styles.itemText}>Security notification</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.itemContent} onPress={()=>alert('Button Pressed')}>
            <MaterialCommunityIcons name="account-key" size={24} color="white" />
            <Text style={styles.itemText}>PassKeys</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.itemContent} onPress={()=>alert('Button Pressed')}>
            <MaterialIcons name="email" size={24} color="white" />
            <Text style={styles.itemText}>Email address</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.itemContent} onPress={()=>alert('Button Pressed')}>
            <MaterialIcons name="password" size={24} color="white" />
            <Text style={styles.itemText}>Two-step verification</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.itemContent} onPress={()=>alert('Button Pressed')}>
            <MaterialIcons name="send-to-mobile" size={24} color="white" />
            <Text style={styles.itemText}>Change number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.itemContent} onPress={()=>alert('Button Pressed')}>
            <Foundation name="page-filled" size={24} color="white" />
            <Text style={styles.itemText}>Request account info</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.itemContent} onPress={()=>setloggedIn(false)}>
            <MaterialCommunityIcons name="account-arrow-right-outline" size={24} color="white" />
            <Text style={styles.itemText}>Remove account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.itemContent} onPress={()=>alert('Button Pressed')}>
            <AntDesign name="delete" size={24} color="white" />
            <Text style={styles.itemText}>Delete account</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 16,
  },

  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  itemText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 16,
  },
});
