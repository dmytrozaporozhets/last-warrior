import {StyleSheet} from 'react-native';

export const TabScreenStyle = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  component: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: -10,
  },
});
