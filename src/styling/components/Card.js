import {StyleSheet} from 'react-native';
import {sg} from '../index';

export const CardStyle = StyleSheet.create({
  container: {
    height: 220,
    width: '100%',
    borderRadius: 8,
    ...sg.mT15,
  },
  img: {
    position: 'absolute',
    height: 220,
    width: '100%',
    borderRadius: 8,
  },
  txtContainer: {
    ...sg.row,
    ...sg.aICenter,
    ...sg.jCSpaceBetween,
    position: 'absolute',
    bottom: 15,
    right: 0,
    left: 0,
    marginHorizontal: 20,
  },
  txt: {
    ...sg.fS18,
    ...sg.colorWhite,
    ...sg.mR10,
    ...sg.ffSemiBold,
  },
});
