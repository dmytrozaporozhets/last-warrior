import {StyleSheet} from 'react-native';
import {Colors, sg} from '../index';

export const HeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.yellow,
    shadowColor: Colors.yellow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 1.5,
    elevation: 2,
  },
  header: {color: Colors.yellow, ...sg.fS28},
  position: {position: 'absolute', ...sg.mT20},
});
