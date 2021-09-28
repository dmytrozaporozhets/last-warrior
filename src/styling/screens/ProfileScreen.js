import {StyleSheet} from 'react-native';
import {Colors, sg} from '../index';

export const ProfileScreenStyle = StyleSheet.create({
  box: {...sg.mV20, ...sg.row, ...sg.jCSpaceBetween, marginHorizontal: 30},
  text: {
    fontSize: 26,
    textAlign: 'center',
    paddingTop: 50,
  },
  imageContainer: {
    backgroundColor: Colors.white,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {color: Colors.white, fontSize: 22},
});
