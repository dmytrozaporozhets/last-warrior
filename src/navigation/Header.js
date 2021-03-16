import {
  DISPLAY_SCREEN,
  EXAMPLE_SCREEN,
  LIBRARY,
  NETWORK_REQUEST,
  PROFILE_SCREEN,
  REACT_HOOKS,
  REACT_HOOKS_EFFECT,
  REACT_HOOKS_MEMO,
  REACT_HOOKS_REF,
  REACT_HOOKS_STATE,
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
      return {headerTitle: () => <LogoIcon name="Last Warrior" />};
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
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Counter
          </Text>
        ),
      };
    case NETWORK_REQUEST:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Network
          </Text>
        ),
      };
    case TAB_SCREEN:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Tab
          </Text>
        ),
      };
    case EXAMPLE_SCREEN:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Practice
          </Text>
        ),
      };
    case REACT_HOOKS:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            React Hooks
          </Text>
        ),
      };
    case REACT_HOOKS_EFFECT:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Effect
          </Text>
        ),
      };
    case REACT_HOOKS_STATE:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use State
          </Text>
        ),
      };
    case REACT_HOOKS_REF:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Ref
          </Text>
        ),
      };
    case REACT_HOOKS_MEMO:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Memo
          </Text>
        ),
      };
    default:
      return SCREEN_STACK;
  }
};
