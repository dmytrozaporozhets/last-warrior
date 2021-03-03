import {StyleSheet} from 'react-native';
import Colors from '../Colors';
import {sg} from '../index';

export const CounterStyle = StyleSheet.create({
  container: {...sg.row, ...sg.jCSpaceBetween},
  box: {
    width: 45,
    height: 45,
    borderRadius: 5,
    ...sg.mR10,
    ...sg.center,
    borderColor: Colors.header,
    borderWidth: 1,
  },
  button: {width: 45, height: 45, borderRadius: 5, ...sg.center},
  text: {...sg.mR5, ...sg.fS16},
});
