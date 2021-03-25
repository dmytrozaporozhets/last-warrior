import React from 'react';
import {ScrollView, View} from 'react-native';

import {ScreenView, Text} from '../components/index';

const Home = ({navigation}) => {
  return (
    <ScreenView>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text>Home screen</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Home;
