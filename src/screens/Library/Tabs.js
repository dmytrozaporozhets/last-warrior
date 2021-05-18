import React, {useState} from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import InputForm from '../../components/InputForm';
import {TabScreenStyle} from '../../styling/screens/TabScreen';
import {Header, ScreenView, Todo} from '../../components';
import {Colors, sg} from '../../styling';

const Tabs = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Add todo',
    },
    {
      id: '2',
      title: 'Click button',
    },
  ]);

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

  const renderItem = ({item}) => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={sg.mT5}>
        <Todo title={item} onLongPress={removeNote} />
      </View>
    </ScrollView>
  );

  const keyExtractor = (item) => {
    return item.id;
  };

  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header title="Add Todo" onBack={goBack} />
      <View style={TabScreenStyle.container}>
        <InputForm
          onSubmit={addNote}
          placeholder="Add todo..."
          titleBtn="Add"
        />
        <FlatList
          keyExractor={keyExtractor}
          data={notes}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenView>
  );
};

export default Tabs;
