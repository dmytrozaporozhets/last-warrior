import {StyleSheet} from 'react-native';

export const DisplayScreenStyle = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: 0,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'aqua',
    marginVertical: 40,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 40,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    width: 80,
    height: 40,
    margin: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    color: 'white',
  },
  buttonTheme: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    width: 120,
    height: 30,
    margin: 10,
    backgroundColor: 'pink',
  },
  textButtonTheme: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 4,
    color: 'black',
  },
  containerTheme: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    flexDirection: 'row',
  },
  textDisplay: {
    textAlign: 'center',
    fontSize: 36,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});
