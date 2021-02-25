import {StyleSheet} from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
  home: {flex: 1, alignItems: 'center'},
  image: {flex: 1, resizeMode: 'cover', justifyContent: 'center'},
  text: {
    fontSize: 26,
    textAlign: 'center',
    paddingTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    width: 75,
    height: 40,
    marginTop: 10,
    marginHorizontal: 13,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    color: 'black',
  },
});
