import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Note = ({note, onRemove}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Pressed', note.id)}
      onLongPress={() => onRemove(note.id)}>
      <View style={styles.note}>
        <Text style={styles.text}> {note.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default Note;
