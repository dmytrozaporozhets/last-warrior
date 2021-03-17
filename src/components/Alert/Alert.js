import React from 'react';
import {Alert as AlertRN} from 'react-native';
import {useAlert} from './AlertContext';

const Alert = () => {
  const alert = useAlert();
  if (alert.visible) {
    return <>{AlertRN.alert('Very important message')}</>;
  } else {
    return null;
  }
};

export default Alert;
