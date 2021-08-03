import React from 'react';
import {Header, ScreenView, Text} from '../components';
import {ScrollView, View} from 'react-native';
import {Colors, sg} from '../styling';
import {libraryScreen} from '../constants';

const Library = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header onProfile isSelectedProfile={false} onSettings />
      <ScrollView>
        <View style={[sg.flex, sg.mV15]}>
          {libraryScreen.map((it) => (
            <View style={{marginHorizontal: 20, marginTop: 20}} key={it.id}>
              <Text
                style={[sg.fS24, {color: Colors.yellow}]}
                bold
                onPress={goTo(it.pathway)}>
                {it.id}. {it.title}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Library;
