import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DisplayScreen from './DisplayScreen';
import SignIn from './SignIn';
import AboutScreen from './AboutScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ComeInOAuth from '../services/auth/ComeInOAuth';
import {
  ABOUT_SCREEN,
  DISPLAY_SCREEN,
  EXAMPLE_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
  SCREEN_STACK,
  SIGN_IN,
  TAB_SCREEN,
  AUTH,
} from './constants';
import {Example} from './Example';
import {TabScreen} from './TabScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            case PROFILE_SCREEN:
              return <Icon name="user" size={size} color={color} />;
            case DISPLAY_SCREEN:
              return <Icon name="television" size={size} color={color} />;
            case TAB_SCREEN:
              return <Icon name="list" size={size} color={color} />;
            case EXAMPLE_SCREEN:
              return <Icon name="flag" size={size} color={color} />;
            default:
              return <Icon name="home" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#B5B5B5',
        style: {backgroundColor: 'black', paddingHorizontal: 10},
      }}>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={EXAMPLE_SCREEN} component={Example} />
      <Stack.Screen name={TAB_SCREEN} component={TabScreen} />
      <Tab.Screen name={DISPLAY_SCREEN} component={DisplayScreen} />
      <Tab.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const MainStackScreen = () => {
  const auth = useSelector((state) => state.token);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SIGN_IN} headerMode="none">
          {!auth.token || !auth.loggedIn ? (
            <>
              <Stack.Screen name={SCREEN_STACK} component={MyTabs} />
              <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
              <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
              <Stack.Screen name={DISPLAY_SCREEN} component={DisplayScreen} />
              <Stack.Screen name={ABOUT_SCREEN} component={AboutScreen} />
              <Stack.Screen name={TAB_SCREEN} component={TabScreen} />
              <Stack.Screen name={EXAMPLE_SCREEN} component={Example} />
            </>
          ) : (
            <>
              <Stack.Screen name={SIGN_IN} component={SignIn} />
              <Stack.Screen name={AUTH} component={ComeInOAuth} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
