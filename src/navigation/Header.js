import {
  EXAMPLE_SCREEN,
  LIBRARY,
  NETWORK_REQUEST,
  PROFILE_SCREEN,
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
} from '../screens/constants';
import {BackButton, LogoIcon} from '../elements/TopBarButtons';
import {Text} from '../components';
import {sg} from '../styling';
import React from 'react';

export const getHeaderOptions = (name) => {
  const defaultHeader = {
    headerLeft: () => <BackButton style={sg.mL25} />,
  };
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
    case REDUX_COUNTER:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Counter
          </Text>
        ),
      };
    case NETWORK_REQUEST:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Network
          </Text>
        ),
      };
    case TAB_SCREEN:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Tab
          </Text>
        ),
      };
    case EXAMPLE_SCREEN:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Practice
          </Text>
        ),
      };
    case REACT_HOOKS:
      return {
        ...defaultHeader,
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
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use State
          </Text>
        ),
      };
    case REACT_HOOKS_REF:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Ref
          </Text>
        ),
      };
    case REACT_HOOKS_MEMO:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Memo
          </Text>
        ),
      };
    case REACT_HOOKS_REDUCER:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Reducer
          </Text>
        ),
      };
    case REACT_HOOKS_CONTEXT:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Context
          </Text>
        ),
      };
    case REACT_HOOKS_CALLBACK:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Callback
          </Text>
        ),
      };
    case REACT_HOOKS_USER:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use User
          </Text>
        ),
      };
    case REDUX:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Redux
          </Text>
        ),
      };
    case REDUX_TODOS:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Posts
          </Text>
        ),
      };
    case NETWORK_FETCH:
      return {
        ...defaultHeader,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Fetch
          </Text>
        ),
      };
    default:
      return SCREEN_STACK;
  }
};
