import React from 'react';
import {Alert as AlertRN} from 'react-native';

const Alert = ({text}) => {
  return <>{AlertRN.alert(`${text}`)}</>;
};

export default Alert;
