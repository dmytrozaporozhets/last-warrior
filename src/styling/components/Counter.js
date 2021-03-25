import {StyleSheet} from 'react-native';
import Colors from '../Colors';
import {sg} from '../index';

export const CounterStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow,
    padding: 10,
    borderRadius: 7,
    ...sg.width100p,
  },
  box: {
    width: 90,
    height: 45,
    borderRadius: 5,
    ...sg.mR10,
    ...sg.center,
    borderColor: Colors.header,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  button: {width: 45, height: 45, borderRadius: 5, ...sg.center},
  text: {
    ...sg.mH10,
    ...sg.fS22,
    ...sg.lH32,
    textAlign: 'center',
  },
});
