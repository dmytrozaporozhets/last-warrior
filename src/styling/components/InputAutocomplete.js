import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const InputAutocompleteStyle = StyleSheet.create({
  android: {
    minHeight: 70,
    zIndex: 1,
  },
  ios: {minHeight: 70, zIndex: 999},
  labelTxt: {
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 5,
  },
  btn: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.5,
  },
  input: {
    padding: 0,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 14,
    width: '100%',
    fontSize: 16,
    lineHeight: 22,
  },
  list: {
    maxHeight: 115,
    borderWidth: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
