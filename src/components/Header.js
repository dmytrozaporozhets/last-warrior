import React from 'react';
import {View} from 'react-native';
import {sg} from '../styling';
import {Text} from './index';
import {HeaderStyle} from '../styling/components/Header';
import {
  BackButton,
  EditButton,
  LogoIcon,
  ProfileButton,
  SettingsButton,
  SkipButton,
  SortButton,
} from '../elements/HeaderButtons';
import {useNavigation} from '@react-navigation/native';
import {
  EDIT_PROFILE,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
} from '../navigation/constants';

const Header = ({
  onBack,
  title,
  onSkip,
  onSort,
  onProfile,
  onSettings,
  onEditProfile,
  isSelectedProfile = false,
  isSelectedSettings = false,
  isEditProfile = false,
}) => {
  const navigation = useNavigation();
  return (
    <View style={HeaderStyle.container}>
      {onProfile && (
        <ProfileButton
          onPress={() =>
            isSelectedProfile
              ? navigation.goBack()
              : navigation.navigate(PROFILE_SCREEN)
          }
          style={[HeaderStyle.position, sg.left20]}
          icon={isSelectedProfile}
        />
      )}
      {onBack && (
        <BackButton
          onPress={onBack}
          style={[HeaderStyle.position, sg.left20]}
        />
      )}
      {title ? (
        <Text style={HeaderStyle.header}>{title}</Text>
      ) : (
        <LogoIcon name="Last Warrior" />
      )}
      {onSkip && (
        <SkipButton
          onPress={onSkip}
          style={[HeaderStyle.position, sg.right20]}
        />
      )}
      {onSort && (
        <SortButton
          onPress={onSort}
          style={[HeaderStyle.position, sg.right20]}
        />
      )}
      {onSettings && (
        <SettingsButton
          onPress={() =>
            isSelectedSettings
              ? navigation.goBack()
              : navigation.navigate(SETTINGS_SCREEN)
          }
          style={[HeaderStyle.position, sg.right20]}
          icon={isSelectedSettings}
        />
      )}
      {onEditProfile && (
        <EditButton
          onPress={() =>
            isEditProfile
              ? navigation.goBack()
              : navigation.navigate(EDIT_PROFILE)
          }
          style={[HeaderStyle.position, sg.right20]}
          icon={isSelectedSettings}
        />
      )}
    </View>
  );
};

export default Header;
