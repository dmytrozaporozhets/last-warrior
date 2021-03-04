import React from 'react';
import {ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleGlobal from '../styling/styleGlobal';
import {HomeScreenStyle} from '../styling/screens/HomeScreen';
import {Text} from '../components/Text';

const fon = require('../../assets/images/image2.jpg');

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={fon} style={HomeScreenStyle.image}>
      <SafeAreaView style={styleGlobal.flex}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{fontSize: 26}} bold>
            Welcome to home!
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
