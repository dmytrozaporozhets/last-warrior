import React from 'react';
import {ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleGlobal from '../styling/styleGlobal';
import {HomeScreenStyle} from '../styling/screens/HomeScreen';
import {Text} from '../components/index';

const fon = require('../../assets/images/image2.jpg');

const Home = ({navigation}) => {
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

export default Home;
