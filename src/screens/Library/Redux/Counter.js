import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {
  asyncIncrement,
  incrementCounter,
  decrementCounter,
  resetCounter,
} from '../../../redax/interface';
import {useSelector, useDispatch} from 'react-redux';
import {astroSky, darkSky} from '../../../../assets/link/image';
import {Colors, sg} from '../../../styling';
import {DisplayScreenStyle} from '../../../styling/screens/DisplayScreen';
import {buttonCounter} from '../../../constants';
import {Header, ScreenView} from '../../../components';

const Counter = ({navigation}) => {
  const [theme, setTheme] = useState(true);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const disabled = state.interface.disabled;
  const goBack = () => navigation.goBack();

  const switchTheme = () => {
    setTheme(!theme);
  };

  const switchOperation = (operation) => () => {
    switch (operation) {
      case 'add':
        dispatch(incrementCounter());
        break;
      case 'sub':
        dispatch(decrementCounter());
        break;
      case 'async':
        dispatch(asyncIncrement());
        break;
      case 'reset':
        dispatch(resetCounter());
        break;
      default:
        break;
    }
  };
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground
        source={theme ? darkSky : astroSky}
        style={DisplayScreenStyle.image}>
        <Header onBack={goBack} />
        <View style={sg.flex}>
          <View style={DisplayScreenStyle.containerTheme}>
            <TouchableOpacity
              style={[
                DisplayScreenStyle.buttonTheme,
                {backgroundColor: disabled ? 'lightgrey' : 'pink'},
              ]}
              activeOpacity={0.5}
              onPress={switchTheme}
              disabled={disabled}>
              <Text style={DisplayScreenStyle.textButtonTheme}>
                Change theme
              </Text>
            </TouchableOpacity>
          </View>
          <View style={DisplayScreenStyle.container}>
            <Text style={DisplayScreenStyle.textDisplay}>
              Сounter: {state.interface.count}
            </Text>
          </View>
          <View style={DisplayScreenStyle.buttonContainer}>
            {buttonCounter.map((it) => (
              <TouchableOpacity
                key={it.id}
                style={[
                  DisplayScreenStyle.button,
                  {backgroundColor: disabled ? 'lightgrey' : it.color},
                ]}
                onPress={switchOperation(it.operation)}
                disabled={disabled}>
                <Text style={DisplayScreenStyle.textButton}>{it.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

export default Counter;
