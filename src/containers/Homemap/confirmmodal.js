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
  TextInput
} from 'react-native';
import * as Progress from 'react-native-progress';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Confirmmodal = ( props ) => {

	const [text, onChangeText] = useState('');

  const { confirmmodalVisible, confirmmodalclose, originplace, destinationplace, fare} = props
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmmodalVisible}
        onRequestClose={confirmmodalclose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
				      <Text style={{fontWeight: 'bold', fontSize: 15}}>Your ride is confirmed .</Text>  
				    </View>
				    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:20}}>
					    <View>
					    	<Text style={{fontSize: 20, fontWeight: 'bold'}}>DL1RTB8287</Text>
					    	<Text style={{color: '#808080'}}>White WagonR</Text>
					    	<Text style={{color: '#808080'}}>Pawan Kumar <Entypo size={15} name='star' color= '#f5bf42' /> 4.4</Text>
					    </View>
					    <Image
	              style={{width: 150, height:  70}}
	              source={require('../.././assets/car2.jpeg')}
	            />
	          </View>
	          <View style={{flexDirection: 'row', margin: 20}}>
		          <TouchableOpacity style={{borderWidth: 1, borderColor: '#808080',borderRadius: 5, padding: 8}}>
		          	<MaterialIcons size={28} name='call' color= '#000' />
		          </TouchableOpacity>
		          <View>
		          	<TextInput
					        style={styles.input}
					        onChangeText={onChangeText}
					        value={text}
					        placeholder="Message your driver"
					      />
		          </View>
		        </View>

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

	          <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
	          	<TouchableOpacity style={styles.cancelbutton}>
		          	<Text style={{fontSize: 20}}><Entypo size={20} name='cross' color= '#000' /> Cancel</Text>
		          </TouchableOpacity>
		          <TouchableOpacity style={[styles.cancelbutton,{borderLeftWidth: 0}]}>
		          	<Text style={{fontSize: 20}}><MaterialCommunityIcons size={20} name='share' color= '#000' /> Share</Text>
		          </TouchableOpacity>
	          </View>
	          <Text style={styles.fare}>Total Fare {fare} rs.</Text>
          </View>
        </View>
      </Modal>
      
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '65%',
    backgroundColor: "white",
    //padding: 20,
    borderRadius: 20,
    //justifyContent: 'center',
    //alignItems: 'center',
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
  header: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 2
  },
  input: {
  	height: 50,
    padding: 10,
    borderColor: '#808080',
    borderRadius: 5,
    marginLeft: 20,
    fontSize: 18,
    width: 310,
    shadowColor: '#000',
	  shadowOffset: { width: 0, height: 2 },
	  shadowOpacity: 0.2,
	  shadowRadius: 2,
	  elevation: 2,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    position: 'absolute',
    left: 15,
    borderRadius: 10,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 15,
    left: 19,
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    position: 'absolute',
    top: 70,
    left: 15,
  },
  cancelbutton: {
  	borderWidth: 0.3,
  	padding: 10,
  	borderColor: '#808080',
  	width: '50%',
  	//margin: 20
  	alignItems: 'center',
  },
  fare: {
  	margin: 20,
  	fontSize: 20,
  	fontWeight: 'bold'
  }
});

export default Confirmmodal;