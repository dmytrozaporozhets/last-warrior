import React from 'react';
import {Text, ScreenView} from '../components';
import {View, ScrollView, ImageBackground} from 'react-native';
import {Colors, sg} from '../styling';
import {libraryScreen} from '../constants';
import {bookingPages} from '../../assets/link/image';
import {HomeScreenStyle} from '../styling/screens/HomeScreen';

const Library = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  return (
    <ScreenView>
      <ImageBackground source={bookingPages} style={HomeScreenStyle.image}>
        <ScrollView style={sg.flex}>
          <Text
            style={{
              fontSize: 32,
              textAlign: 'center',
              marginTop: 20,
              color: Colors.white,
            }}
            bold>
            Application Guide
          </Text>
          {libraryScreen.map((it) => (
            <View style={{marginHorizontal: 20, marginTop: 10}} key={it.id}>
              <Text
                style={[sg.fS24, {color: Colors.white}]}
                bold
                onPress={goTo(it.pathway)}>
                {it.id}. {it.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </ScreenView>
  );
};

export default Library;
