import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const CityInfoModalStyle = StyleSheet.create({
  wrapper: {flex: 1, marginTop: 150, alignItems: 'center'},
  container: {
    backgroundColor: Colors.black,
    width: '80%',
    height: 400,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colors.aqua,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  close: {position: 'absolute', right: 15, top: 15},
  text: {color: Colors.yellow, fontSize: 20},
  image: {
    borderRadius: 14,
    height: 160,
    width: '100%',
    marginBottom: 20,
  },
  fakeImage: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    height: 160,
    width: '100%',
    marginBottom: 20,
  },
});
