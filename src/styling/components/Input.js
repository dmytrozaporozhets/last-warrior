import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const InputStyle = StyleSheet.create({
  container: {width: '100%', marginVertical: 10, height: 60},
  label: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 5,
  },
  eye: {
    position: 'absolute',
    right: 2,
    paddingRight: 13,
    marginRight: 5,
    top: 16,
    paddingHorizontal: 4,
    fontSize: 14,
    lineHeight: 16,
  },
  input: {
    padding: 0,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 14,
    width: '100%',
    fontSize: 16,
    lineHeight: 22,
  },
  errorText: {color: Colors.red, marginTop: 4, fontSize: 12},
});
