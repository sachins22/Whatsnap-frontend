import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from 'expo-media-library';




export default function Profile({ route }) {
  const [images, setImages] = React.useState([]);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [CPstatus, requestCPPermission] = ImagePicker.useCameraPermissions();
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const navigation = useNavigation();
  const { item } = route.params;

  const toggleModalVisibility1 = () => {
    setModalVisible1(!modalVisible1);
  };

  const cameraAttach = async () => {
    if (CPstatus.status !== "granted") {
      const permission = await requestCPPermission();
      if (!permission.granted) return;
    }

    let capImg = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [25, 25],
      quality: 1,
    });

    setImages(capImg.assets)
   
    const asset = await MediaLibrary.createAssetAsync(capImg.assets[0].uri);
    const album = await MediaLibrary.getAlbumAsync('WSnap');
    if (!album) {
      album = await MediaLibrary.createAlbumAsync('WSnap', asset, false);
    } else {
      await MediaLibrary.addAssetsToAlbumAsync(album, [asset]);
}
  };

  const imgPicker = async () => {
    if (status.status !== "granted") {
      const permission = await requestPermission();
      if (!permission.granted) return;
    }

    const IMP = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [25, 25],
      quality: 1,
    });

    setImages(IMP.assets)
 
  };

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
          <FlatList
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={{ uri: item.uri }} style={styles.firstImg}></Image>
            )}
          />
          <View style={styles.firstImgIcon}>
            <TouchableOpacity onPress={toggleModalVisibility1}>
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
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={toggleModalVisibility1}
        >
          <View style={styles.centeredView1}>
            <View style={styles.modalView1}>
              <TouchableOpacity style={styles.Modal1Camera} onPress={cameraAttach}>
                <AntDesign name="camera" size={24} color="black" />
                <Text style={styles.Modal1Text}>Take Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Modal1Photo} onPress={imgPicker}>
                <Entypo name="images" size={24} color="black" />
                <Text style={styles.Modal1Text}>Choose image</Text>
              </TouchableOpacity>
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
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView1: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Modal1Camera:{
    flexDirection:"row",
    marginVertical:20,

  },
  Modal1Photo:{
    flexDirection:"row",
    marginVertical:20,

  },
  Modal1Text:{
    marginHorizontal:15
  }
});
