import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const CityCardStyle = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.aquamarine,
    backgroundColor: Colors.darkBlue,
    borderRadius: 20,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categories: {
    justifyContent: 'space-between',
    marginRight: 20,
  },
  box: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    lineHeight: 25,
    color: Colors.aqua,
  },
});
