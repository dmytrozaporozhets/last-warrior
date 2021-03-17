import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const ButtonStyleSize = {
  large: StyleSheet.create({
    container: {
      height: 40,
      borderWidth: 2,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    txt: {
      textAlign: 'center',
      fontSize: 22,
      lineHeight: 30,
    },
  }),
  medium: StyleSheet.create({
    container: {
      height: 40,
      borderWidth: 2,
      borderRadius: 11,
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
    },
    txt: {
      textAlign: 'center',
      fontSize: 18,
      lineHeight: 32,
    },
  }),
  small: StyleSheet.create({
    container: {
      height: 30,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
    },
    txt: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 22,
    },
  }),
};

export const ButtonStyleType = {
  yellow: {
    backColor: {backgroundColor: Colors.yellow},
    txt: {color: 'black'},
    border: {borderColor: 'black'},
  },
  orange: {
    backColor: {backgroundColor: Colors.orange},
    txt: {color: 'white'},
    border: {borderColor: 'black'},
  },
  green: {
    backColor: {backgroundColor: Colors.green},
    txt: {color: 'white'},
    border: {borderColor: 'black'},
  },
  blue: {
    backColor: {backgroundColor: Colors.blue3},
    txt: {color: 'white'},
    border: {borderColor: 'black'},
  },
  primary: {
    backColor: {backgroundColor: Colors.btnPrimaryBG},
    txt: {color: 'white'},
    border: {borderColor: 'black'},
  },
  red: {
    backColor: {backgroundColor: Colors.red},
    txt: {color: 'white'},
    border: {borderColor: 'black'},
  },
};
