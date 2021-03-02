import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DisplayScreen from './DisplayScreen';
import AboutScreen from './AboutScreen';
import InfoScreen from './InfoScreen';
import FormScreen from './FormScreen';
import ComeInOAuth from './form/ComeInOAuth';
import SignInScreen from './form/SignInScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  ABOUT_SCREEN,
  DISPLAY_SCREEN,
  EXAMPLE_SCREEN,
  HOME_SCREEN,
  INFO_SCREEN,
  PROFILE_SCREEN,
  SCREEN_STACK,
} from './index';
import {Example} from './Example';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarPosition={'bottom'}>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
      <Tab.Screen name={ABOUT_SCREEN} component={AboutScreen} />
      <Tab.Screen name={DISPLAY_SCREEN} component={DisplayScreen} />
      <Stack.Screen name={INFO_SCREEN} component={InfoScreen} />
      <Tab.Screen name={SCREEN_STACK} component={InfoScreen} />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  const authentication = useSelector((state) => state.token);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form" headerMode="none">
          {!authentication.token || !authentication.loggedIn ? (
            <>
              <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
              <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
              <Stack.Screen name={DISPLAY_SCREEN} component={DisplayScreen} />
              <Stack.Screen name={ABOUT_SCREEN} component={AboutScreen} />
              <Stack.Screen name={INFO_SCREEN} component={InfoScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name={SCREEN_STACK} component={MyTabs} />
              <Stack.Screen name={EXAMPLE_SCREEN} component={Example} />
            </>
          ) : (
            <>
              <Stack.Screen name="Form" component={FormScreen} />
              <Stack.Screen name="ComeInOAuth" component={ComeInOAuth} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
