import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//import { useNavigation } from '@react-navigation/native';

import styles from './styles.js';
import PlaceRow from "./PlaceRow";

const homePlace = {
  description: 'New Delhi',
  geometry: { location: { lat: 28.6139, lng: 77.2090 } },
};
const workPlace = {
  description: 'Noida',
  geometry: { location: { lat: 28.5355, lng: 77.3910 } },
};

const Azamgarh = {
  description: 'Azamgarh',
  geometry: { location: { lat: 26.0739, lng: 83.1859 } },
};

const Jaunpur = {
  description: 'Jaunpur',
  geometry: { location: { lat: 25.7464, lng: 82.6837 } },
};

const Gorakhpur = {
  description: 'Gorakhpur',
  geometry: { location: { lat: 26.7606, lng: 83.3732 } },
};

const Varanasi = {
  description: 'Varanasi',
  geometry: { location: { lat: 25.3176, lng: 82.9739 } },
};

const GreaterNoida = {
  description: 'Greater Noida',
  geometry: { location: { lat: 28.4744, lng: 77.5040 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  //const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      props.navigation.navigate('Homemap', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder="Pick-up"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          //enablePoweredByContainer={false}
          suppressDefaultStyles
          // currentLocation={true}
          // currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyClbU7bq9Dv3bHNkSmtXKT-Q8bXdcYWoIM',
            language: 'en',
            components: 'country:in',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          //predefinedPlaces={[homePlace, Azamgarh, Jaunpur, workPlace]}
          predefinedPlaces={[homePlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Destination"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          //enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyClbU7bq9Dv3bHNkSmtXKT-Q8bXdcYWoIM',
            language: 'en',
            components: 'country:in',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          // predefinedPlaces={[workPlace, Jaunpur, Gorakhpur, Varanasi, homePlace, GreaterNoida]}
          predefinedPlaces={[workPlace]}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
