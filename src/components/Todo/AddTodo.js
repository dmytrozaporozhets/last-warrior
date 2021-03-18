import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Input} from '../index';
import {sg} from '../../styling';

const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      console.log('check');
    } else {
      Alert.alert('Заметка не может быть пустой');
    }
  };

  return (
    <View style={styles.block}>
      <Input
        onChange={setValue}
        value={value}
        placeholder="Enter a todo..."
        containerStyle={sg.width60p}
      />
      <Button
        title="Add Todo"
        onPress={pressHandler}
        style={[sg.mL10, sg.mT25, sg.width120]}
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

export default AddTodo;
