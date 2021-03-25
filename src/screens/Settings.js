import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';

import {ScreenView, Text} from '../components/index';
import {highBuild3} from '../../assets/link/image';
import {Colors, sg} from '../styling';

const Settings = ({navigation}) => {
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground source={highBuild3} style={sg.flex}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{color: Colors.white, fontSize: 24}} bold>
              Settings screen
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </ScreenView>
  );
};

export default Settings;
