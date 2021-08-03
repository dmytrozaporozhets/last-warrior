import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const ProgressBarStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 14,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  containerBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {height: 15, borderRadius: 14, marginRight: 3},
});
