import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';





export default function Started() {

  const navigation = useNavigation();

  const Goback = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          accessibilityLabel="arrowleft"
          style={styles.iconSpacing}
          onPress={Goback}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.mainText}>Starred messages</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.SecmainIcon1}>
          <View style={styles.SecmainIcon2}>
            <AntDesign name="staro" size={24} color="white" />
          </View>
        </View>
        <View style={styles.Thirdmain}>
          <Text style={styles.ThirdmainText}>Tap and hold on any</Text>
          <Text style={styles.ThirdmainText}>messages in any chat to</Text>
          <Text style={styles.ThirdmainText}>star it, so you can easily</Text>
          <Text style={styles.ThirdmainText}>find it later</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    paddingBottom: 10,
  },
  iconSpacing: {
    marginRight: 10,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SecmainIcon1: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    marginBottom: 20,
  },
  SecmainIcon2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Thirdmain: {
    alignItems: 'center',
  },
  ThirdmainText: {
    color: 'white',
    textAlign: 'center',
  },
});
