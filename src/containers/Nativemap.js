import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const Googlemap = () => {
  const [lat, setLat] = useState(37.78825)
  const [long, setLong] = useState(-122.4324)

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      return(
        setLat(info.coords.latitude),
        setLong(info.coords.longitude)
      )
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.25,
          longitudeDelta: 0.15,
        }}
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: long,
          }}
          title={'My Location'}
          description="here i am">
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 700,
    width: 400,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '80%',
    width: '100%',
  },
});

export default Googlemap;

