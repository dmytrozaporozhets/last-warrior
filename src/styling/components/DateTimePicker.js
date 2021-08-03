import {StyleSheet} from 'react-native';
import {Colors, sg} from '../index';

export const DateTimePickerStyle = StyleSheet.create({
  label: {...sg.fS13, ...sg.lH16, ...sg.mB5},
  button: {
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  icon: {...sg.fS18, color: Colors.header},
});
