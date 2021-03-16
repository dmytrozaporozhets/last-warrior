import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Input} from './index';
import {sg} from '../styling';

const AddNote = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Заметка не может быть пустой');
    }
  };

  return (
    <View style={styles.block}>
      <Input
        onChange={setValue}
        value={value}
        placeholder="Введите заметку..."
        containerStyle={sg.width70p}
      />
      <Button
        title="Добавить"
        onPress={pressHandler}
        style={[sg.mL10, sg.mT25, sg.width100]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
});

export default AddNote;
