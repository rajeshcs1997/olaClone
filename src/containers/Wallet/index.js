import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";

const Wallet = (props) =>{
  const [money, setMoney] = React.useState("")
  return (
    <>
    <View style={styles.header}>
      <View>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color= '#808080' size={25} style={{marginLeft: 10, marginTop: 10,}}/>
      </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.Wallettext}>Ola Money</Text>  
      </View>
    </View>
    <View style={styles.container}>
      <View style={{backgroundColor: '#fff', padding: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Add Ola Money</Text>
        <Text style={{color: '#808080'}}>It's quick, safe and secure</Text>
        <TextInput
          style={styles.inputfield}
          placeholderStyle={styles.placeholdertext}
          placeholderTextColor="#808080"
          onChangeText={(money)=>setMoney(money)}
          placeholder="0"
          value={money}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.confirmbutton}>
        <Text style={[styles.confirmbuttontext, {fontSize: 17}]}>Add Money</Text>
      </TouchableOpacity> 
    </View>
    </>
  );
}

export default Wallet;
