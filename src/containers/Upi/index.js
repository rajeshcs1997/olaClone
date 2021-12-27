import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";

const Upi = (props) =>{
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
        <Text style={styles.Upitext}>Add Existing UPI ID</Text>  
      </View>
    </View>
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 16, color: '#808080'}}>This UPI ID will be used for your payment</Text>
        <TextInput
          style={styles.inputfield}
          placeholderTextColor="#808080"
          onChangeText={(money)=>setMoney(money)}
          placeholder="UPI ID"
          value={money}
        />
        <Text style={{fontSize: 16, color: '#808080'}}>A nominal amound will be deducted for varification & refunded back. Approved from your UPI app to use UPI ID for payments</Text>
      </View>
      <TouchableOpacity style={styles.confirmbutton}>
        <Text style={[styles.confirmbuttontext, {fontSize: 17}]}>Authenticate</Text>
      </TouchableOpacity> 
    </View>
    </>
  );
}

export default Upi;
