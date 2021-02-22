import React, {useState} from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import Navbar from '../component/Navnar';
import Header from '../component/Header';
import AddNote from '../component/AddNote';
import Note from '../component/Note';
import {SafeAreaView} from 'react-native-safe-area-context';

const image = {
  uri:
    'https://cdn.pixabay.com/photo/2020/06/12/08/33/mountain-5289671_960_720.jpg',
};

const myFirstMobileProject = () => {
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
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.main}>
        <View style={styles.component}>
          <Navbar title="React Native" />
          <View style={styles.container}>
            <Header />
            <View style={styles.container} />
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

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  component: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: -10,
  },
});

export default myFirstMobileProject;
