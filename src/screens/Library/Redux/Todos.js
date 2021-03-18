import React from 'react';
import {View, ImageBackground} from 'react-native';
import {darkSky} from '../../../../assets/link/image';
import {Colors, sg} from '../../../styling';
import {DisplayScreenStyle} from '../../../styling/screens/DisplayScreen';
import {Text, ScreenView} from '../../../components';

const Todos = () => {
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground source={darkSky} style={DisplayScreenStyle.image}>
        <View style={[sg.flex]}>
          <Text>Todos</Text>
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

export default Todos;
