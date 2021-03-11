import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import {Button} from './index';
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
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите заметку..."
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Button title="Добавить" onPress={pressHandler} style={sg.mL10} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    height: 50,
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default AddNote;
