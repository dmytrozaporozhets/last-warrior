import React from 'react';
import {ScreenView, Text} from '../components/index';
import {View, ScrollView, ImageBackground} from 'react-native';
import {Colors, sg} from '../styling';
import {highBuild9} from '../../assets/link/image';

const Info = () => {
  return (
    <ScreenView>
      <ImageBackground source={highBuild9} style={sg.flex}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{color: Colors.white, fontSize: 24}} bold>
              Info screen
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </ScreenView>
  );
};

export default Info;
