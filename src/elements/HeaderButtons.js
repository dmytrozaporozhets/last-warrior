import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, sg} from '../styling';
import React from 'react';
import {Text} from '../components';

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

export const BackButton = ({
  onPress,
  style,
  colorIcon = Colors.yellow,
  size = 22,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <Icon name="caret-left" size={size} color={colorIcon} />
    </TouchableOpacity>
  );
};

export const SkipButton = ({
  onPress,
  style,
  colorIcon = Colors.yellow,
  size = 22,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <Icon name="caret-right" size={size} color={colorIcon} />
    </TouchableOpacity>
  );
};

export const ProfileButton = ({onPress, style, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon name="user" size={22} color={icon ? Colors.yellow : Colors.gray2} />
    </TouchableOpacity>
  );
};

export const SettingsButton = ({onPress, style, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon name="cog" size={22} color={icon ? Colors.yellow : Colors.gray2} />
    </TouchableOpacity>
  );
};

export const SortButton = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon name="sort" size={22} color={Colors.yellow} />
    </TouchableOpacity>
  );
};
