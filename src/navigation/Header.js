import {
  DISPLAY_SCREEN,
  EXAMPLE_SCREEN,
  LIBRARY,
  NETWORK_REQUEST,
  PROFILE_SCREEN,
  SCREEN_STACK,
  TAB_SCREEN,
} from '../screens/constants';
import {BackButton, LogoIcon} from '../elements/TopBarButtons';
import {Text} from '../components';
import {sg} from '../styling';
import React from 'react';

export const getHeaderOptions = (name) => {
  switch (name) {
    case SCREEN_STACK:
      return {headerTitle: () => <LogoIcon />};
    case LIBRARY:
      return {
        headerTitle: () => <Text bold>Library</Text>,
      };
    case PROFILE_SCREEN:
      return {
        headerTitle: () => <Text bold>Profile</Text>,
      };
    case DISPLAY_SCREEN:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'white', fontSize: 28}} bold>
            Counter
          </Text>
        ),
      };
    case NETWORK_REQUEST:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'white', fontSize: 28}} bold>
            Network
          </Text>
        ),
      };
    case TAB_SCREEN:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'white', fontSize: 28}} bold>
            Tab
          </Text>
        ),
      };
    case EXAMPLE_SCREEN:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'white', fontSize: 28}} bold>
            Practice
          </Text>
        ),
      };
    default:
      return SCREEN_STACK;
  }
};
