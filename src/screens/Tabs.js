import React, {useState} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import AddNote from '../components/AddNote';
import Note from '../components/Note';
import {TabScreenStyle} from '../styling/screens/TabScreen';
import {smoke} from '../../assets/link/image';
import {ScreenView} from '../components';
import {Colors, sg} from "../styling";

const Tabs = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (title) => {
    setNotes((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground source={smoke} style={TabScreenStyle.image}>
        <View style={TabScreenStyle.component}>
          <View style={TabScreenStyle.container}>
            <View style={TabScreenStyle.container} />
            <AddNote onSubmit={addNote} />
            <FlatList
              keyExractor={(item) => item.id.toString()}
              data={notes}
              renderItem={({item}) => (
                <Note note={item} onRemove={removeNote} />
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

export default Tabs;
