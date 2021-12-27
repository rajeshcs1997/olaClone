import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  ScrollView,
  Modal,
  Alert,
  Pressable
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MapViewDirections from 'react-native-maps-directions';
import haversine from "haversine";
import { RadioButton } from 'react-native-paper';
import driverLocation from './driverLocation';
import Bookmodal from './bookmodal';
import { styles } from "./styles";

const Homemap = ({ route, navigation }) => {
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  const [drivelocation, setDrivelocaion] = useState("")
  const [originplace, setOriginplace] = useState("")
  const [destinationplace, setDestinationplace] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('first');
  const [bookmodalVisible, setBookModalVisible] = useState(false);

  const GOOGLE_MAPS_APIKEY = 'AIzaSyClbU7bq9Dv3bHNkSmtXKT-Q8bXdcYWoIM';

  const distance = drivelocation ? haversine({latitude: drivelocation[0].lat, longitude: drivelocation[0].lng}, {latitude: drivelocation[1].lat, longitude: drivelocation[1].lng}).toFixed(2) : null

  useEffect( async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Example App',
        'message': 'Example App access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
      //alert("You can use the location");
    } else {
      console.log("location permission denied")
      alert("Location permission denied");
    }
    Geolocation.getCurrentPosition(info => {
      return(
        setLat(info.coords.latitude),
        setLong(info.coords.longitude)
      )
    });
  }, []);
  useEffect(()=>{
      const aaa= route.params &&[route.params.originPlace.details.geometry.location,route.params.destinationPlace.details.geometry.location];
      setDrivelocaion(aaa)
      route.params && setLat(route.params.originPlace.details.geometry.location.lat),
      route.params && setLong(route.params.originPlace.details.geometry.location.lng)
      route.params && setOriginplace(route.params.originPlace.data.description)
      route.params && setDestinationplace(route.params.destinationPlace.data.description)
  },[route.params])

  const handleheader = () =>{
    navigation.navigate('Locationpicker')
  }
  const handleNavigate = (name) =>{
    setModalVisible(!modalVisible);
    navigation.navigate(name)
  }
  const handleBook = () =>{
    setBookModalVisible(!bookmodalVisible)
  }
  const onRegionChange =()=>{
    return{
      latitude: lat,
      longitude: long,
      latitudeDelta: 1.0922,
      longitudeDelta: 1.0421,
    }
  }
  //console.log("driver",driverLocation)
  return (
    <>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>handleheader()}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons size={40} name="reorder-three" />
          <View style={styles.dot}></View>
          <Text style={{marginTop: 9, marginLeft: 10}}>Your current location</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        {(lat && long) ? <MapView
          style={styles.map}
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 1.0922,
            longitudeDelta: 1.0421,
          }}
          onRegionChange={onRegionChange}
        >
          {
            drivelocation ?
            <>
            <Marker
              coordinate={{latitude: drivelocation[0].lat, longitude: drivelocation[0].lng}}
              title={'Pickup Location'}
              >
              <Ionicons size={50} color="#17522b" name="ios-pin-sharp" />
            </Marker>
            <Marker
              coordinate={{latitude: drivelocation[1].lat, longitude: drivelocation[1].lng}}
              title={'Destination'}
              >
              <Ionicons size={50} color="red" name="ios-pin-sharp" />
            </Marker>

            {driverLocation.map((res, i)=>{
              return(
                <Marker
                  coordinate={{latitude: res.latitude, longitude: res.longitude}}
                  key={i}
                >
                    <Image
                    style={{width: 50, height:  30}}
                    source={require('../.././assets/car1.jpeg')}
                    />
                </Marker>
              )
            })}

            </>
            :
            <Marker
              coordinate={{
                latitude: lat,
                longitude: long,
              }}
              title={'My Location'}
              description="here i am">
            </Marker>
          }
          
          {
            drivelocation ? <MapViewDirections
              origin={{latitude: drivelocation[0].lat, longitude: drivelocation[0].lng}}
              destination={{latitude: drivelocation[1].lat, longitude: drivelocation[1].lng}}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={5}
              strokeColor="hotpink"
            /> : null
          }
         
        </MapView> : null }
      </View>
      
      {drivelocation ? 
        <View style={{ height: 300}}>
        <ScrollView>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10}}>
            <View>
              {/* Circle near Origin input */}
              <View style={styles.circle} />

              {/* Line between dots */}
              <View style={styles.line} />

              {/* Square near Destination input */}
              <View style={styles.square} />
            </View>
            <View style={{marginLeft: 50}}>
              <Text style={{fontSize: 20, marginTop: -7}}>{originplace}</Text>
              <Text style={{fontSize: 20, marginTop: 38}}>{destinationplace}</Text>
            </View>
          </View>
          <Text style={{marginTop: 20, marginLeft: 20, color: 'green',}}><Text style={{color: '#000', fontSize: 15}}>Total distance </Text> <Text style={{fontSize:20}}>{distance}Km</Text></Text>
          <View style={styles.card}>
            <Image
              style={{width: 80, height:  70, marginLeft: 15}}
              source={require('../.././assets/bike.jpeg')}
            />
            <Text style={{fontSize:26, marginLeft: 55}}>Bike</Text>
            <Text style={{marginRight: 30, fontSize: 20}}>{(distance*2).toFixed(2)} rs.</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={{width: 150, height:  70}}
              source={require('../.././assets/car3.jpeg')}
            />
            <Text style={{fontSize:26}}>Mini</Text>
            <Text style={{marginRight: 30, fontSize: 20}}>{(distance*3).toFixed(2)} rs.</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={{width: 150, height:  70}}
              source={require('../.././assets/car2.jpeg')}
            />
            <Text style={{fontSize:26}}>Prime</Text>
            <Text style={{marginRight: 30, fontSize: 20}}>{(distance*4).toFixed(2)} rs.</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 20 }}>
            <TouchableOpacity style={styles.paymentbutton} onPress={() => setModalVisible(true)}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons size={40} name='ios-wallet-sharp' color='#eb6b34'/>
                <Text style={styles.paymentbuttontext}>Setup payment</Text>
                <MaterialIcons size={40} name="keyboard-arrow-down" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookbutton} onPress={()=>handleBook()}>
              <Text style={styles.bookbuttontext}>Book now</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      : null}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Select Payment mode</Text>
            <View style={styles.rowview}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  value="first"
                  color="#000"
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}
                />
                <Text style={{fontSize: 14, marginLeft: 15, color: '#000', fontWeight: 'bold'}}><SimpleLineIcons size={15} name='wallet' color= 'green' />  Ola money wallet</Text>
              </View>
            </View>
            <View style={styles.flatline}></View>

            <View style={styles.rowview}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  value="second"
                  color="#000"
                  status={ checked === 'second' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('second')}
                />
                <Text style={{fontSize: 14, marginLeft: 15, color: '#000', fontWeight: 'bold'}}><Entypo size={15} name='paypal' color= 'blue' />  PhonePe</Text>
              </View>
            </View>
            <View style={styles.flatline}></View>

            <View style={styles.rowview}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  value="third"
                  color="#000"
                  status={ checked === 'third' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('third')}
                />
                <Text style={{fontSize: 14, marginLeft: 15, color: '#000', fontWeight: 'bold'}}><FontAwesome size={15} name='money' color= 'green' />  Cash</Text>
              </View>
            </View>
            <View style={styles.flatline}></View>

            <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 18}}>Add payment method</Text>
            <TouchableOpacity onPress={()=>handleNavigate("Wallet")}>
              <View style={styles.rowview}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name="plus" color= '#349eeb' size={25} style={{marginLeft: 5}}/>
                  <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Add more Ola Money</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" color= '#808080' size={20}/>
              </View>
            </TouchableOpacity>
            <View style={[styles.flatline, {marginTop: 10}]}></View>

            <View style={styles.rowview}>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name="creditcard" color= '#349eeb' size={25} style={{marginLeft: 5}}/>
                <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Add a Credit/Debit card</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" color= '#808080' size={20}/>
            </View>
            <View style={[styles.flatline, {marginTop: 10}]}></View>

            <TouchableOpacity onPress={()=>handleNavigate("Upi")}>
            <View style={styles.rowview}>
              <View style={{flexDirection: 'row'}}>
                <Entypo name='paypal' color= '#349eeb' size={20} />
                <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Add Google Pay/UPI ID</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" color= '#808080' size={20}/>
            </View>
            </TouchableOpacity>

            <View style={[styles.flatline, {marginTop: 10}]}></View>
            <TouchableOpacity style={styles.confirmbutton}>
              <Text style={[styles.bookbuttontext, {fontSize: 17}]}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Bookmodal bookmodalVisible={bookmodalVisible} bookmodalclose={()=>{setBookModalVisible(!bookmodalVisible)}} originplace={originplace} destinationplace={destinationplace} fare={(distance*4).toFixed(2)}/>
    </>
  );
};

export default Homemap;