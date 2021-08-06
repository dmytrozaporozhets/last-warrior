import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Button, ScreenView, Text} from '../components/index';
import {moon} from '../../assets/link/image';
import {WelcomeHomeStyle} from '../styling/screens/WelcomeHomeStyle';
import {Colors} from '../styling';
import {SCREEN_STACK} from '../navigation/constants';

const WelcomeHome = ({navigation}) => {
  const onNext = () => navigation.navigate(SCREEN_STACK);
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground source={moon} style={WelcomeHomeStyle.image}>
        <View style={WelcomeHomeStyle.container}>
          <Text style={WelcomeHomeStyle.text} bold>
            Welcome to home!
          </Text>
          <Button
            title="Next"
            size="medium"
            style={WelcomeHomeStyle.button}
            onPress={onNext}
          />
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

export default WelcomeHome;
