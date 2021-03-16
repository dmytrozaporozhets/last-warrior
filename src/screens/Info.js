import React from 'react';
import {ScreenView, Text} from '../components/index';
import {View, ScrollView} from 'react-native';

const Info = () => {
  return (
    <ScreenView>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text>Info screen</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Info;
