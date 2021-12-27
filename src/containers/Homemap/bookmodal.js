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
import Searchmodal from './searchmodal'
import Confirmmodal from './confirmmodal'

const Bookmodal = ( props ) => {

  const [searchmodalVisible, setSearchModalVisible] = useState(false);
  const [confirmmodalVisible, setConfirmModalVisible] = useState(false);

  const { bookmodalVisible, bookmodalclose, originplace, destinationplace, fare} = props

  const handleProceed = () =>{
    bookmodalclose()
    setSearchModalVisible(!searchmodalVisible)
    setTimeout(()=>{setSearchModalVisible(false)}, 3000);
    setTimeout(()=>{setConfirmModalVisible(!confirmmodalVisible)}, 3000);
    //setConfirmModalVisible(!confirmmodalVisible) 
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={bookmodalVisible}
        onRequestClose={bookmodalclose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Always wear a mask. Only 2 passengers are allowed per vehicle.</Text>
            <Text style={{fontSize: 18.5, color: '#808080', marginTop: 10}}>Please ensure you follow these for every ola ride, to keep you and your driver safe.</Text>

            <View style={{flexDirection: 'row', marginTop: 20,}}>
              <View style={styles.dot}></View>
              <Text style={{fontSize: 20, color: '#808080'}}>
                <Text style={{textDecorationLine: "underline", fontWeight: 'bold'}}>Wear a mask</Text> and sanitise your hands before and after each ride.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20,}}>
              <View style={styles.dot}></View>
              <Text style={{fontSize: 20, color: '#808080'}}>
                Only <Text style={{textDecorationLine: "underline", fontWeight: 'bold'}}>2 passengers are allowed</Text> per vehicle
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20, paddingRight: 20}}>
              <View style={styles.dot}></View>
              <Text style={{fontSize: 20, color: '#808080'}}>
                Travel only if you are <Text style={{textDecorationLine: "underline", fontWeight: 'bold'}}>completely symtom-free</Text> and have no fever, cough or other respiratory problems.
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 60}}>
              <TouchableOpacity style={[styles.bookbutton,{backgroundColor: '#808080'}]} onPress={bookmodalclose}>
                <Text style={[styles.bookbuttontext,{color: '#000'}]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookbutton} onPress={()=>handleProceed()}>
                <Text style={styles.bookbuttontext}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Searchmodal searchmodalVisible={searchmodalVisible} searchmodalclose={()=>{setSearchModalVisible(!searchmodalVisible)}} />
      <Confirmmodal confirmmodalVisible={confirmmodalVisible} confirmmodalclose={()=>{setConfirmModalVisible(!confirmmodalVisible)}} originplace={originplace} destinationplace={destinationplace} fare={fare}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '65%',
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dot: {
    backgroundColor: '#808080',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 15
  },
  bookbutton: {
    //marginLeft: 10,
    backgroundColor: "#000",
    width: 180,
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
  },
  bookbuttontext: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default Bookmodal;