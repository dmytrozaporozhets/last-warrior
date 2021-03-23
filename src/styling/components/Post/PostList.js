import {StyleSheet} from 'react-native';
import {Colors, sg} from '../../index';

export const PostListStyle = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: Colors.white,
    marginVertical: 15,
  },
  textEmpty: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    color: Colors.white,
    marginVertical: 15,
  },
  text: {color: Colors.white, textAlign: 'center'},
  box: {...sg.mT10, ...sg.aSCenter, ...sg.width100p, ...sg.pH30},
});
