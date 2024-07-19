import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.firstImgContainer}>
          <Image source={item.profile} style={styles.firstImg} />
          <View style={styles.firstImgIcon}>
            <TouchableOpacity>
              <Feather name="camera" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.userRow}>
            <Feather name="user" size={24} color="white" />
            <Text style={styles.userText}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>About</Text>
          <View style={styles.userRow}>
            <AntDesign name="infocirlceo" size={24} color="white" />
            <Text style={styles.userText}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Phone</Text>
          <View style={styles.userRow}>
            <Ionicons name="call-outline" size={24} color="white" />
            <Text style={styles.userText}>{item.mobileNo}</Text>
          </View>
        </View>
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
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 16,
  },
  firstImgContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  firstImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  firstImgIcon: {
    position: 'absolute',
    bottom: 10,
    right: 70,
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 25,
  },
  userInfo: {
    marginBottom: 16,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
    marginLeft:30,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});
