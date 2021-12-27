import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  modalView: {
    width: '100%',
    height: '65%',
    backgroundColor: "white",
    padding: 35,
    borderRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.7)",
    backgroundColor: "transparent",
    paddingLeft: 20,
    marginTop: 15
  },
  dot: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 25
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth:  0.5,
    margin: 20,
    borderColor: '#808080',
    borderRadius:10,
    padding: 5,
    backgroundColor: '#fff'
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
  bookbutton: {
    marginLeft: 10,
    backgroundColor: "#000",
    width: 150,
    height: 60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
  },
  confirmbutton: {
    marginTop: 20,
    backgroundColor: "#000",
    width: '100%',
    height: 60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
  },
  bookbuttontext: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
   paymentbutton: {
    marginLeft: 10,
    height: 60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
  },
  paymentbuttontext: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold'
  },
  rowview: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flatline: {
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    marginLeft: 50,
    width: '100%'
  },
});