import React from 'react';
import {ScreenView, Text} from '../components/index';
import {View, ScrollView} from 'react-native';

const About = () => {
  return (
    <ScreenView>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text>About screen</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default About;
