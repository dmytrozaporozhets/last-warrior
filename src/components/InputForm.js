import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Input} from './index';
import {sg} from '../styling';

const InputForm = ({
  onSubmit,
  inputStyle,
  buttonStyle,
  placeholder,
  titleBtn,
}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Field cannot be empty');
    }
  };

  return (
    <View style={styles.block}>
      <Input
        onChange={setValue}
        value={value}
        placeholder={placeholder}
        containerStyle={[sg.width200, inputStyle]}
      />
      <Button
        title={titleBtn}
        size="small"
        btnType="green"
        onPress={pressHandler}
        style={[sg.mL10, sg.mT25, buttonStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default InputForm;
