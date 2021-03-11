import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {sg} from '../styling';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

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

export const LogoIcon = () => {
  return (
    <View style={[sg.row, sg.aICenter, sg.height50]}>
      <Icon name="hand-scissors-o" size={40} color="white" style={sg.pR5} />
      <Icon name="tripadvisor" size={40} color="white" />
      <Icon name="hand-peace-o" size={40} color="white" style={sg.pB15} />
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
