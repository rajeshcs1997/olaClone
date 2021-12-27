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
import * as Progress from 'react-native-progress';

const Searchmodal = ( props ) => {

  const { searchmodalVisible, searchmodalclose} = props
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={searchmodalVisible}
        onRequestClose={searchmodalclose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 30}}>Contacting Drivers Nearby...</Text>
            <Progress.Bar progress={0.3} useNativeDriver={true} indeterminate={true} width={450} height={12} borderRadius={0} color={"green"} unfilledColor={"#F5F5F5"} borderWidth={0}/>
            <Image
              style={{width: 100, height:  100, borderRadius: 100, marginTop: 50}}
              source={require('../.././assets/driver.png')}
            />
            <TouchableOpacity style={styles.cancelbutton} onPress={searchmodalclose}>
              <Text style={styles.cancelbuttontext}>Cancel Ride</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '45%',
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cancelbutton: {
    backgroundColor: "#F5F5F5",
    width: '100%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    marginTop: 70
  },
  cancelbuttontext: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
});

export default Searchmodal;