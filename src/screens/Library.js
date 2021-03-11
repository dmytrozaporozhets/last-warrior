import React from 'react';
import {Text, ScreenView} from '../components';
import {View, ScrollView} from 'react-native';
import {sg} from '../styling';
import {libraryScreen} from '../constants';

const Library = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  return (
    <ScreenView>
      <ScrollView style={sg.flex}>
        <Text style={{fontSize: 32, textAlign: 'center', marginTop: 30}} bold>
          Application Guide
        </Text>
        {libraryScreen.map((it) => (
          <View style={{marginHorizontal: 20, marginTop: 30}} key={it.id}>
            <Text style={sg.fS24} bold onPress={goTo(it.pathway)}>
              {it.id}. {it.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScreenView>
  );
};

export default Library;
