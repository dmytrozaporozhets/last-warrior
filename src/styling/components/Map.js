import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../index';

const windowHeight = Dimensions.get('window').height;
console.log(windowHeight);

export const MapStyle = StyleSheet.create({
  container: {
    height: windowHeight * 0.5,
    width: '100%',
  },
  map: {
    flex: 1,
    overflow: 'hidden',
  },
  btn: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.link,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginLeft: 10,
    marginTop: 5,
    opacity: 0.5,
  },
});
