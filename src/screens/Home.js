import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';

import {ScreenView, Text} from '../components/index';
import {highBuild5} from '../../assets/link/image';
import {Colors, sg} from '../styling';

const Home = ({navigation}) => {
  return (
    <ScreenView>
      <ImageBackground source={highBuild5} style={sg.flex}>
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
      </ImageBackground>
    </ScreenView>
  );
};

export default Home;
