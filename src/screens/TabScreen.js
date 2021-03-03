import React, {useState} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import Navbar from '../components/Navnar';
import AddNote from '../components/AddNote';
import Note from '../components/Note';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabScreenStyle} from '../styling/screens/TabScreen';
import {tabScreen} from '../../assets/link';

export const TabScreen = () => {
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
    <ImageBackground source={tabScreen} style={TabScreenStyle.image}>
      <SafeAreaView style={TabScreenStyle.main}>
        <View style={TabScreenStyle.component}>
          <Navbar title="React Native" />
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
      </SafeAreaView>
    </ImageBackground>
  );
};
