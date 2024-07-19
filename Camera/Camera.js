import { StyleSheet, Text, TouchableOpacity, View, Button, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, } from 'expo-camera';
import { Entypo, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
    const cameraRef = useRef();
  const [face, setFace] = useState("back");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      
    })
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  return (
    <View style={styles.Imagecontainer}>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
      {image && <Image  source={{ uri: image }} style={styles.image} />}
    </View>
  );
  };

  var takePicture = async() => {
    var imgdata= await cameraRef.current.takePictureAsync()
    console.log(imgdata)
    setImage(imgdata)
  }
  

  const toggleFlash = () => {
    // Your flash toggle logic here
  };

  const rotateCamera = () => {
    setFace((current) => current === 'back' ? 'front' : 'back');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CameraView style={styles.camera} facing={face}>
        <TouchableOpacity style={styles.mainIcon1}>
          <Entypo name="cross" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainIcon2} onPress={toggleFlash}>
          <MaterialIcons name="flash-off" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon1} onPress={pickImage}> 
            <Ionicons name="image-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
          <View style={styles.icon2}>
            <View style={styles.icon2B}></View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon3} onPress={rotateCamera}>
            <FontAwesome6 name="arrows-rotate" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <BottomPage/>
      </CameraView>
    </SafeAreaView>
  );
}

function BottomPage() {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity>
        <Text style={styles.bottomIcon1}>Video</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.bottomIcon2}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Imagecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "auto",
    height:"auto"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  mainIcon1: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  mainIcon2: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  icon1: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    bottom:30
  },
  icon2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 8,
    bottom:30
  },
  icon2B: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  icon3: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    bottom:30
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomIcon1: {
    padding: 10,
    color: 'white',
  },
  bottomIcon2: {
    padding: 10,
    color: 'white',
  },
});
