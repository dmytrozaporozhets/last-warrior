import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  SignIn,
  Profile,
  Counter,
  Home,
  Example,
  Tabs,
  Library,
  Network,
  Info,
  About,
  ReactHooks,
  UseEffect,
  UseRef,
  UseState,
  UseMemo,
  UseReducer,
  UseContext,
  UseCallback,
  Redux,
  Posts,
  UseUser,
  Fetch,
} from '../screens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ComeInOAuth from '../services/auth/ComeInOAuth';
import {
  EXAMPLE_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
  SCREEN_STACK,
  SIGN_IN,
  TAB_SCREEN,
  AUTH,
  LIBRARY,
  NETWORK_REQUEST,
  INFO,
  ABOUT,
  REACT_HOOKS,
  REACT_HOOKS_EFFECT,
  REACT_HOOKS_REF,
  REACT_HOOKS_STATE,
  REACT_HOOKS_MEMO,
  REACT_HOOKS_REDUCER,
  REACT_HOOKS_CONTEXT,
  REACT_HOOKS_CALLBACK,
  REDUX,
  REDUX_COUNTER,
  REDUX_TODOS,
  REACT_HOOKS_USER,
  NETWORK_FETCH,
} from '../screens/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform} from 'react-native';
import {getHeaderOptions} from './Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case HOME_SCREEN:
              return <Icon name="home" size={size} color={color} />;
            case LIBRARY:
              return <Icon name="book" size={size} color={color} />;
            case PROFILE_SCREEN:
              return <Icon name="user" size={size} color={color} />;
            case INFO:
              return <Icon name="info" size={size} color={color} />;
            case ABOUT:
              return <Icon name="server" size={size} color={color} />;
            default:
              return <Icon name="folder" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'yellow',
        inactiveTintColor: '#B5B5B5',
        style: {backgroundColor: 'black', paddingHorizontal: 10},
      }}>
      <Tab.Screen name={HOME_SCREEN} component={Home} />
      <Tab.Screen name={LIBRARY} component={Library} />
      <Tab.Screen name={ABOUT} component={About} />
      <Tab.Screen name={INFO} component={Info} />
      <Tab.Screen name={PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
};

export const MainStackScreen = () => {
  const auth = useSelector((state) => state.token);
  const insets = useSafeAreaInsets();
  // const defaultModalScreenOptions = {
  //   headerShown: false,
  //   cardStyle: {opacity: 1, backgroundColor: 'rgba(196, 196, 196, 0.7)'},
  // };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SIGN_IN}
        headerMode="screen"
        mode="modal"
        screenOptions={{
          animationEnabled: false,
          headerStyle: {
            height: Platform.OS === 'ios' ? 60 + insets.top : 60,
            backgroundColor: 'black',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}>
        {!auth.token || !auth.loggedIn ? (
          <>
            <Stack.Screen
              name={SCREEN_STACK}
              component={MyTabs}
              options={{...getHeaderOptions(SCREEN_STACK)}}
            />
            <Stack.Screen name={HOME_SCREEN} component={Home} />
            <Stack.Screen name={PROFILE_SCREEN} component={Profile} />
            <Stack.Screen
              name={LIBRARY}
              component={Library}
              options={{...getHeaderOptions(LIBRARY)}}
            />
            <Stack.Screen
              name={REDUX_COUNTER}
              component={Counter}
              options={{...getHeaderOptions(REDUX_COUNTER)}}
            />
            <Stack.Screen
              name={TAB_SCREEN}
              component={Tabs}
              options={{...getHeaderOptions(TAB_SCREEN)}}
            />
            <Stack.Screen
              name={EXAMPLE_SCREEN}
              component={Example}
              options={{...getHeaderOptions(EXAMPLE_SCREEN)}}
            />
            <Stack.Screen
              name={NETWORK_REQUEST}
              component={Network}
              options={{...getHeaderOptions(NETWORK_REQUEST)}}
            />
            <Stack.Screen name={ABOUT} component={About} />
            <Stack.Screen name={INFO} component={Info} />
            <Stack.Screen
              name={REACT_HOOKS}
              component={ReactHooks}
              options={{...getHeaderOptions(REACT_HOOKS)}}
            />
            <Stack.Screen
              name={REACT_HOOKS_EFFECT}
              component={UseEffect}
              options={{...getHeaderOptions(REACT_HOOKS_EFFECT)}}
            />
            <Stack.Screen
              name={REACT_HOOKS_REF}
              component={UseRef}
              options={{...getHeaderOptions(REACT_HOOKS_REF)}}
            />
            <Stack.Screen
              name={REACT_HOOKS_STATE}
              component={UseState}
              options={{...getHeaderOptions(REACT_HOOKS_STATE)}}
            />
            <Stack.Screen
              name={REACT_HOOKS_MEMO}
              component={UseMemo}
              options={{...getHeaderOptions(REACT_HOOKS_MEMO)}}
            />
            <Stack.Screen
              name={REACT_HOOKS_REDUCER}
              component={UseReducer}
              options={{...getHeaderOptions(REACT_HOOKS_REDUCER)}}
            />
            <Stack.Screen
              name={REACT_HOOKS_CONTEXT}
              component={UseContext}
              options={{...getHeaderOptions(REACT_HOOKS_CONTEXT)}}
            />
            <Stack.Screen
              name={REACT_HOOKS_CALLBACK}
              component={UseCallback}
              options={{...getHeaderOptions(REACT_HOOKS_CALLBACK)}}
            />
            <Stack.Screen
              name={REDUX}
              component={Redux}
              options={{...getHeaderOptions(REDUX)}}
            />
            <Stack.Screen
              name={REDUX_TODOS}
              component={Posts}
              options={{...getHeaderOptions(REDUX_TODOS)}}
            />
            <Stack.Screen
              name={REACT_HOOKS_USER}
              component={UseUser}
              options={{...getHeaderOptions(REACT_HOOKS_USER)}}
            />
            <Stack.Screen
              name={NETWORK_FETCH}
              component={Fetch}
              options={{...getHeaderOptions(NETWORK_FETCH)}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={SIGN_IN}
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={AUTH}
              component={ComeInOAuth}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
