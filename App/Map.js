import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker, Heatmap } from 'react-native-maps';
import CHATS from "../chat/ChatsData"


const users = CHATS
const heatmapPoints = users.map(user => ({
  latitude: user.Latitude,
  longitude: user.Longitude,
  weight: 1    
}));

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 34.0522,
          longitude: -118.2437,
          latitudeDelta: 50,
          longitudeDelta: 50,
        }}
      >
        {users.map(user => (
          <Marker
            key={user.id}
            coordinate={{ latitude: user.Latitude, longitude: user.Longitude }}
            title={user.name}
          >
            <Image source={{ uri: user.profile }} style={styles.avatar} />
          </Marker>
        ))}

        <Heatmap points={heatmapPoints} radius={50} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  avatar: {
    width: 50, 
    height: 50,
    borderRadius: 25, 
    borderWidth: 2,
    borderColor: '#fff', 
  },
});
