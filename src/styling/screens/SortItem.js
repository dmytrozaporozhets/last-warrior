import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../index';
import React from 'react';

export const SortItemStyle = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: Colors.orange,
    borderRadius: 7,
    ...(Platform.OS !== 'android' && {
      zIndex: 10,
    }),
  },
  text: {
    color: Colors.white,
    fontSize: 22,
    textAlign: 'center',
  },
  zIndex: {
    ...(Platform.OS !== 'android' && {
      zIndex: 10,
    }),
  },
  color: {color: Colors.white},
});
