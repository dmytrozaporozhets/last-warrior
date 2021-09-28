import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const CategorySelectCardStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 240,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: Colors.green,
    position: 'absolute',
    top: 10,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 20,
    width: 20,
  },
  image: {width: 160, height: 160, borderRadius: 7},
  title: {fontSize: 20, position: 'absolute', bottom: 10, fontWeight: '500'},
});
