import {
  NETWORK_REQUEST,
  REACT_HOOKS,
  REACT_HOOKS_CALLBACK,
  REACT_HOOKS_CONTEXT,
  REACT_HOOKS_EFFECT,
  REACT_HOOKS_MEMO,
  REACT_HOOKS_REDUCER,
  REACT_HOOKS_REF,
  REACT_HOOKS_STATE,
  REDUX_COUNTER,
  SCREEN_STACK,
  TAB_SCREEN,
  REDUX,
  REDUX_TODOS,
  REACT_HOOKS_USER,
  NETWORK_FETCH,
  COUNTER,
  LIBRARY_GUIDE,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
  PRACTICE_SCREEN,
  CLASS_ROOM,
  SELECT_CARD,
} from '../screens/constants';
import {
  BackButton,
  LogoIcon,
  ProfileButton,
  RightButtonsContainer,
  SettingsButton,
} from './TopBarButtons';
import {Text} from '../components';
import {sg} from '../styling';
import React from 'react';
import {HeaderStyle} from '../styling/components/Header';

export const getHeaderOptions = (name) => {
  const defaultHeader = {
    headerLeft: () => <BackButton style={sg.mL25} />,
  };
  switch (name) {
    case SCREEN_STACK:
      return {
        headerLeft: () => <ProfileButton style={sg.mL25} />,
        headerTitle: () => <LogoIcon name="Last Warrior" />,
        headerRight: () => (
          <RightButtonsContainer secondLeftButton={<SettingsButton />} />
        ),
      };
    case REDUX_COUNTER:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Counter
          </Text>
        ),
      };
    case PROFILE_SCREEN:
      return {
        headerLeft: () => <ProfileButton style={sg.mL25} isSelected={true} />,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Profile
          </Text>
        ),
        headerRight: () => null,
      };
    case SETTINGS_SCREEN:
      return {
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Settings
          </Text>
        ),
        headerRight: () => (
          <RightButtonsContainer
            secondLeftButton={<SettingsButton isSelected={true} />}
          />
        ),
      };
    case NETWORK_REQUEST:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Network
          </Text>
        ),
      };
    case LIBRARY_GUIDE:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.txt} bold>
            Application Guide
          </Text>
        ),
      };
    case TAB_SCREEN:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Tab
          </Text>
        ),
      };
    case PRACTICE_SCREEN:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Practice
          </Text>
        ),
      };
    case REACT_HOOKS:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            React Hooks
          </Text>
        ),
      };
    case REACT_HOOKS_EFFECT:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            use Effect
          </Text>
        ),
      };
    case REACT_HOOKS_STATE:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            use State
          </Text>
        ),
      };
    case REACT_HOOKS_REF:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            use Ref
          </Text>
        ),
      };
    case REACT_HOOKS_MEMO:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            use Memo
          </Text>
        ),
      };
    case REACT_HOOKS_REDUCER:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            use Reducer
          </Text>
        ),
      };
    case REACT_HOOKS_CONTEXT:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            use Context
          </Text>
        ),
      };
    case REACT_HOOKS_CALLBACK:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            use Callback
          </Text>
        ),
      };
    case REACT_HOOKS_USER:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            use User
          </Text>
        ),
      };
    case REDUX:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Redux
          </Text>
        ),
      };
    case REDUX_TODOS:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Posts
          </Text>
        ),
      };
    case NETWORK_FETCH:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Fetch
          </Text>
        ),
      };
    case COUNTER:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Counter
          </Text>
        ),
      };
    case CLASS_ROOM:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Class Room
          </Text>
        ),
      };
    case SELECT_CARD:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={HeaderStyle.text} bold>
            Select Card
          </Text>
        ),
      };
    default:
      return SCREEN_STACK;
  }
};
