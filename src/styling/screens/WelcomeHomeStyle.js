import {StyleSheet} from 'react-native';
import {Colors, sg} from '../index';

export const WelcomeHomeStyle = StyleSheet.create({
  image: {flex: 1, resizeMode: 'cover', justifyContent: 'center'},
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-between'},
  text: {
    fontSize: 46,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 100,
  },
  button: {...sg.aSCenter, ...sg.mV40},
});
