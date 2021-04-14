import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const SelectItemStyle = StyleSheet.create({
  box: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: Colors.orange,
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
    marginTop: 40,
  },
});
