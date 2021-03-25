import {StyleSheet} from 'react-native';

export const LibraryStyle = StyleSheet.create({
  image: {flex: 1, resizeMode: 'cover', justifyContent: 'flex-end'},
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 135,
    justifyContent: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 130,
    height: 45,
    width: 150,
    backgroundColor: 'dimgrey',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 23,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 23,
  },
  text: {fontSize: 38, marginRight: 10},
});
