import {StyleSheet} from 'react-native';

export const PickerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
  },
  viewContainer: {height: '100%', justifyContent: 'center', width: '100%'},
  inputAndroid: {
    width: '130%',
    textAlign: 'center',
  },
  inputIOS: {
    width: '100%',
    paddingRight: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  label: {fontSize: 13, lineHeight: 16, marginBottom: 5},
});
