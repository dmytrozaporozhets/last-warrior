import {StyleSheet} from 'react-native';
import {Colors, sg} from '../index';

export const ButtonWithIconStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.btnPrimaryBG,
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    marginVertical: 20,
  },
  text: {...sg.fS16, ...sg.mL5},
});
