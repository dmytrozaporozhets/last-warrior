import {StyleSheet} from 'react-native';

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
      borderRadius: 14,
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
};

export const ButtonStyleType = {
  yellow: {
    backColor: {backgroundColor: 'yellow'},
    txt: {color: 'black'},
    border: {borderColor: 'black'},
  },
  orange: {
    backColor: {backgroundColor: 'orange'},
    txt: {color: 'black'},
    border: {borderColor: 'black'},
  },
};
