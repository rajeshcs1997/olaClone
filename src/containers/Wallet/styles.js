import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    elevation: 2
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: '#fff',
    margin: 20 
  },
  Wallettext: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputfield: {
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
    marginRight:20,
    fontSize:20,
    marginBottom: 20,
    width: '50%'
  },
  placeholdertext: {
    fontSize:30
  },
  confirmbutton: {
    marginTop: 20,
    backgroundColor: "#000",
    width: '100%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
  },
  confirmbuttontext: {
    fontSize: 20,
    color: 'yellow',
    fontWeight: 'bold'
  },
}); 