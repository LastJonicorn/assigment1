import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#ff837a',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#ff837a',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 17,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#ff837a",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  points: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    textAlign: 'center'
  },
  dicepoints: {
    flexDirection: 'row',
    width: 280,
    alignContent: 'center'
  },
  player: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  play: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: '#ff837a'
  },
  textInput:{
    borderWidth: 2,
    borderRadius: 3,
    padding: 5,
    marginTop: 10
  }
});