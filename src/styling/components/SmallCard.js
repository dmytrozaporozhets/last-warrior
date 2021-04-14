import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const SmallCardStyle = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Colors.gray,
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    paddingLeft: 5,
    paddingVertical: 5,
  },
  image: {
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginLeft: 10,
  },
});
