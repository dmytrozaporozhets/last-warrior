import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {sg} from '../styling';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SignInStyle} from '../styling/screens/SignIn';
import {Text} from '../components';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={sg.mL25}>
      <Icon name="caret-left" size={24} color="white" />
    </TouchableOpacity>
  );
};

export const SkipButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={sg.mR25}>
      <Icon name="caret-right" size={24} color="white" />
    </TouchableOpacity>
  );
};

export const LogoIcon = ({name}) => {
  return (
    <View style={[sg.centeredRow]}>
      <Text style={SignInStyle.header} bold>
        {name}
      </Text>
      <Icon name="dragon" color="yellow" size={30} />
    </View>
  );
};

export const RightButtonsContainer = ({firstLeftButton, secondLeftButton}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 25,
      }}>
      {firstLeftButton}
      <View style={{width: 16}} />
      {secondLeftButton}
    </View>
  );
};
