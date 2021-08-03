import {StyleSheet} from 'react-native';
import {Colors, sg} from '../index';

export const DropDownStyle = StyleSheet.create({
  container: {height: 50, flex: 1},
  style: {...sg.width100p},
  itemStyle: {justifyContent: 'flex-start', color: Colors.white},
});
