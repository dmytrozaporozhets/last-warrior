import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, sg} from '../styling';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from '../components';
import {PROFILE_SCREEN, SETTINGS_SCREEN} from '../screens/constants';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={sg.mL25}>
      <Icon name="caret-left" size={24} color="yellow" />
    </TouchableOpacity>
  );
};

export const SkipButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={sg.mR25}>
      <Icon name="caret-right" size={24} color="yellow" />
    </TouchableOpacity>
  );
};

export const LogoIcon = ({name}) => {
  return (
    <View style={[sg.aICenter, sg.jCCenter, sg.mB15]}>
      <Icon name="pied-piper-alt" color="yellow" size={40} />
      <Text
        style={{
          fontSize: 16,
          color: Colors.yellow,
          textAlign: 'center',
          marginTop: 5,
        }}
        bold>
        {name}
      </Text>
    </View>
  );
};

export const ProfileButton = ({isSelected = false}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        isSelected ? navigation.goBack() : navigation.navigate(PROFILE_SCREEN)
      }
      style={sg.mL25}>
      <Icon name="user" size={24} color={isSelected ? 'yellow' : '#B5B5B5'} />
    </TouchableOpacity>
  );
};

export const SettingsButton = ({isSelected = false}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        isSelected ? navigation.goBack() : navigation.navigate(SETTINGS_SCREEN)
      }
      style={sg.mL25}>
      <Icon name="cog" size={24} color={isSelected ? 'yellow' : '#B5B5B5'} />
    </TouchableOpacity>
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
