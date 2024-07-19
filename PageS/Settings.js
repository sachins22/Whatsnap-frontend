import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import img from '../assets/agree.png';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const Bio = [{
  id: 1,
  profile: img,
  name: "Sachins22",
  mobileNo: "+9189304555585",
  description: "love is better than world"
}];

export default function Settings() {
  const navigation = useNavigation();
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  
  if (status != "granted") {
    requestPermission()
  }
  // const [image, setImage] = React.useState(null);
  function Goback() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.main}>
          <TouchableOpacity accessibilityLabel="Go back" style={styles.iconSpacing} onPress={Goback}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.mainText}>Settings</Text>
          </View>
        </View>
        <View style={styles.mainIcon}>
          <TouchableOpacity accessibilityLabel="Search">
            <FontAwesome name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SecMain}>
        <FlatList
          data={Bio}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.profileSection}
              accessibilityLabel="Profile"
              onPress={() => navigation.navigate('Profile', { item })}
            >
              <Image source={item.profile} style={styles.SecMainImage} />
              <View style={styles.SecMainUser}>
                <Text style={styles.SecMainUserName}>{item.name}</Text>
                <Text style={styles.SecMainMobileN}>{item.mobileNo}</Text>
                <Text style={styles.SecMainDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.qrCodeIcon} accessibilityLabel="QR Code">
          <Ionicons name="qr-code-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.AccountMain}>
          <TouchableOpacity style={styles.AccountMainButton} accessibilityLabel="Account" onPress={()=>navigation.navigate('Account')}>
            <MaterialIcons name="key" size={24} color="white" />
            <View style={styles.AccountMainButtonText}>
              <Text style={styles.AccountMainButtonText1}>Account</Text>
              <Text style={styles.AccountMainButtonText2}>Security notification, change number</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.PrivacyMain}>
          <TouchableOpacity style={styles.PrivacyMainButton} accessibilityLabel="Privacy">
            <Fontisto name="locked" size={24} color="white" />
            <View style={styles.PrivacyMainButtonText}>
              <Text style={styles.PrivacyMainButtonText1}>Privacy</Text>
              <Text style={styles.PrivacyMainButtonText2}>Block contact, disappearing messages</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ChatsMain}>
          <TouchableOpacity style={styles.ChatsMainButton} accessibilityLabel="Chats">
            <MaterialCommunityIcons name="android-messages" size={24} color="white" />
            <View style={styles.ChatsMainButtonText}>
              <Text style={styles.ChatsMainButtonText1}>Chats</Text>
              <Text style={styles.ChatsMainButtonText2}>Theme, wallpapers, chat history</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Notification}>
          <TouchableOpacity style={styles.NotificationButton} accessibilityLabel="Notification">
            <Ionicons name="notifications-outline" size={24} color="white" />
            <View style={styles.NotificationButtonText}>
              <Text style={styles.NotificationButtonText1}>Notification</Text>
              <Text style={styles.NotificationButtonText2}>Messages, group & call tones</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Storage}>
          <TouchableOpacity style={styles.StorageButton} accessibilityLabel="Storage">
            <MaterialCommunityIcons name="sticker-circle-outline" size={24} color="white" />
            <View style={styles.StorageButtonText}>
              <Text style={styles.StorageButtonText1}>Storage</Text>
              <Text style={styles.StorageButtonText2}>Network usage, auto-download</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Language}>
          <TouchableOpacity style={styles.LanguageButton} accessibilityLabel="App language">
            <Entypo name="network" size={24} color="white" />
            <View style={styles.LanguageButtonText}>
              <Text style={styles.LanguageButtonText1}>App language</Text>
              <Text style={styles.LanguageButtonText2}>English (device's language)</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.HelpMain}>
          <TouchableOpacity style={styles.HelpMainButton} accessibilityLabel="Help">
            <Ionicons name="help-circle-outline" size={24} color="white" />
            <View style={styles.HelpMainButtonText}>
              <Text style={styles.HelpMainButtonText1}>Help</Text>
              <Text style={styles.HelpMainButtonText2}>Help center, contact us, privacy policy</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Invite}>
          <TouchableOpacity style={styles.InviteButton} accessibilityLabel="Invite a friend">
            <SimpleLineIcons name="people" size={24} color="white" />
            <View style={styles.InviteButtonText}>
              <Text style={styles.InviteButtonText1}>Invite a friend</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 60,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  text: {
    marginLeft: 10,
  },
  mainIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 22,
  },
  SecMain: {
    width: '100%',
    height: 120,
    borderRadius: 35,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  SecMainUser: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  SecMainImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  SecMainUserName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  SecMainMobileN: {
    color: 'white',
    fontSize: 16,
  },
  SecMainDescription: {
    color: 'white',
    fontSize: 16,
  },
  qrCodeIcon: {
    marginLeft: 'auto',
    paddingRight: 10,
  },
  AccountMain: {
    width: '100%',
    borderRadius: 35,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
  },
  AccountMainButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  AccountMainButtonText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  AccountMainButtonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  AccountMainButtonText2: {
    color: 'white',
    fontSize: 14,
  },
  PrivacyMain: {
    width: '100%',
    borderRadius: 35,
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginTop: 20,
  },
  PrivacyMainButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PrivacyMainButtonText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  PrivacyMainButtonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  PrivacyMainButtonText2: {
    color: 'white',
    fontSize: 14,
  },
  ChatsMain: {
    width: '100%',
    borderRadius: 35,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 37,
  },
  ChatsMainButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ChatsMainButtonText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  ChatsMainButtonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ChatsMainButtonText2: {
    color: 'white',
    fontSize: 14,
  },
  Notification: {
    width: '100%',
    borderRadius: 35,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 37,
  },
  NotificationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  NotificationButtonText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  NotificationButtonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  NotificationButtonText2: {
    color: 'white',
    fontSize: 14,
  },
  Storage: {
    width: '100%',
    borderRadius: 35,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 37,
  },
  StorageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  StorageButtonText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  StorageButtonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  StorageButtonText2: {
    color: 'white',
    fontSize: 14,
  },
  Language: {
    width: '100%',
    borderRadius: 35,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 37,
  },
  LanguageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LanguageButtonText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  LanguageButtonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  LanguageButtonText2: {
    color: 'white',
    fontSize: 14,
  },
  HelpMain: {
    width: '100%',
    borderRadius: 35,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 37,
  },
  HelpMainButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HelpMainButtonText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  HelpMainButtonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  HelpMainButtonText2: {
    color: 'white',
    fontSize: 14,
  },
  Invite: {
    width: '100%',
    borderRadius: 35,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 37,
  },
  InviteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  InviteButtonText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  InviteButtonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
