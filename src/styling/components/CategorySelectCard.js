import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const CategorySelectCardStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.orange,
    height: 200,
    borderRadius: 14,
    alignItems: 'center',
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
  image: {width: 160, height: 140, borderRadius: 7, marginTop: 20},
  title: {
    fontSize: 20,
    position: 'absolute',
    bottom: 10,
    fontWeight: '500',
    color: Colors.white,
  },
});
