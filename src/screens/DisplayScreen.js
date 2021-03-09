import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {
  asyncIncrement,
  incrementCounter,
  decrementCounter,
  resetCounter,
} from '../redax/interface';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {firstFon, secondFon} from '../../assets/link/image';
import {sg} from '../styling';
import {DisplayScreenStyle} from '../styling/screens/DisplayScreen';
import {buttonCounter} from '../constants';

const DisplayScreen = () => {
  const [theme, setTheme] = useState(true);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const disabled = state.interface.disabled;

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
    <ImageBackground
      source={theme ? firstFon : secondFon}
      style={DisplayScreenStyle.image}>
      <SafeAreaView style={sg.flex}>
        <View style={DisplayScreenStyle.containerTheme}>
          <TouchableOpacity
            style={DisplayScreenStyle.buttonTheme}
            activeOpacity={0.5}
            onPress={switchTheme}
            disabled={disabled}>
            <Text style={DisplayScreenStyle.textButtonTheme}>Сменить тему</Text>
          </TouchableOpacity>
        </View>
        <Text style={DisplayScreenStyle.text}>Welcome to my page</Text>
        <View style={DisplayScreenStyle.container}>
          <Text style={DisplayScreenStyle.textDisplay}>
            Счётчик: {state.interface.count}
          </Text>
        </View>
        <View style={DisplayScreenStyle.buttonContainer}>
          {buttonCounter.map((it) => (
            <TouchableOpacity
              style={[DisplayScreenStyle.button, {backgroundColor: it.color}]}
              onPress={switchOperation(it.operation)}
              disabled={disabled}>
              <Text style={DisplayScreenStyle.textButton}>{it.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default DisplayScreen;
