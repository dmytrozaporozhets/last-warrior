import React from 'react';
import {Header, ScreenView, Text} from '../components/index';
import {View, ScrollView} from 'react-native';
import {Colors} from '../styling';

const About = () => {
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header logo />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={{color: Colors.white, fontSize: 24}} bold>
            About screen
          </Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default About;
