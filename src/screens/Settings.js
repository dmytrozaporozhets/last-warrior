import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header, ScreenView, Text} from '../components/index';
import {Colors} from '../styling';

const Settings = ({navigation}) => {
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header onSettings isSelectedSettings={true} logo />
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
    </ScreenView>
  );
};

export default Settings;
