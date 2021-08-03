import React from 'react';
import {Alert as AlertRN, View} from 'react-native';
import {useAlert} from './AlertContext';

const AlertHook = ({text}) => {
  const alert = useAlert();
  if (alert.visible) {
    return <View>{AlertRN.alert(`${text}`)}</View>;
  } else {
    return null;
  }
};

export default AlertHook;
