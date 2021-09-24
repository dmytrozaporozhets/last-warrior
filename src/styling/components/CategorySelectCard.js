import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const CategorySelectCardStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 350,
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
    height: 30,
    width: 30,
  },
  image: {width: 160, height: 160},
  title: {fontSize: 20, position: 'absolute', bottom: 20, fontWeight: '500'},
});
