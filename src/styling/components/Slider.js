import {StyleSheet} from 'react-native';
import {Colors, sg} from '../index';

export const SliderStyle = StyleSheet.create({
  marker: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.blue3,
  },
  trackStyle: {height: 6},
  markerContainerStyle: {marginTop: 3},
  containerStyle: {...sg.mH10},
  selectedStyle: {backgroundColor: Colors.blue3},
});
