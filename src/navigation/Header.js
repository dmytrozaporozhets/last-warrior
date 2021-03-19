import {
  DISPLAY_SCREEN,
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
    case REDUX_COUNTER:
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
    case REACT_HOOKS_REDUCER:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Reducer
          </Text>
        ),
      };
    case REACT_HOOKS_CONTEXT:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Context
          </Text>
        ),
      };
    case REACT_HOOKS_CALLBACK:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use Callback
          </Text>
        ),
      };
    case REACT_HOOKS_USER:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            use User
          </Text>
        ),
      };
    case REDUX:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Redux
          </Text>
        ),
      };
    case REDUX_TODOS:
      return {
        headerLeft: () => <BackButton style={sg.mL25} />,
        headerTitle: () => (
          <Text style={{color: 'yellow', fontSize: 28}} bold>
            Todos
          </Text>
        ),
      };
    default:
      return SCREEN_STACK;
  }
};
