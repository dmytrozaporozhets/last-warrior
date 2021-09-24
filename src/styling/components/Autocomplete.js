import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../index';

const androidStyles = {
  container: {
    flex: 1,
  },
  inputContainer: {
    borderColor: Colors.white2,
    borderRadius: 1,
    borderWidth: 1,
    marginBottom: 0,
  },
  list: {
    borderColor: Colors.white2,
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderTopWidth: 0,
    margin: 10,
    marginTop: 0,
  },
};

const iosStyles = {
  container: {
    zIndex: 1,
  },
  inputContainer: {
    borderColor: Colors.white2,
    borderRadius: 1,
    borderWidth: 1,
  },
  input: {
    backgroundColor: Colors.white,
    height: 40,
    paddingLeft: 3,
  },
  list: {
    borderColor: Colors.white2,
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderTopWidth: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
};

export const AutocompleteStyle = StyleSheet.create({
  input: {
    backgroundColor: Colors.white,
    height: 40,
    paddingLeft: 3,
  },
  ...Platform.select({
    android: androidStyles,
    ios: iosStyles,
    default: iosStyles,
  }),
});
