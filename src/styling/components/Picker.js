import {StyleSheet} from 'react-native';

export const PickerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  viewContainer: {height: '100%', justifyContent: 'center', width: '100%'},
  inputAndroid: {
    width: '130%',
    textAlign: 'center',
    color: 'black',
    height: 50,
  },
  inputIOS: {
    width: '100%',
    paddingRight: 10,
    height: 50,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  label: {fontSize: 13, lineHeight: 16, marginBottom: 5},
});
