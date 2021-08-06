import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header, ScreenView, Text} from '../components/index';
import {Colors} from '../styling';

const Home = ({navigation}) => {
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
            Home screen
          </Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Home;
