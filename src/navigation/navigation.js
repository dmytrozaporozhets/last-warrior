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
  Practice,
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
  CounterView,
  WelcomeHome,
  Settings,
  ClassRoom,
  ChooseCities,
  CityInfoModal,
  SelectItem,
  SortItem,
} from '../screens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ComeInOAuth from '../services/auth/ComeInOAuth';
import {
  PRACTICE_SCREEN,
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
  COUNTER,
  WELCOME_HOME,
  SETTINGS_SCREEN,
  CLASS_ROOM,
  CHOOSE_CITIES,
  CITY_INFO_MODAL,
  SELECT_ITEM,
  SORT_ITEM,
} from '../screens/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform} from 'react-native';
import {Colors} from '../styling';

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
        activeTintColor: Colors.yellow,
        inactiveTintColor: Colors.gray2,
        style: {backgroundColor: Colors.black, paddingHorizontal: 10},
      }}>
      <Tab.Screen name={HOME_SCREEN} component={Home} />
      <Tab.Screen name={LIBRARY} component={Library} />
      <Tab.Screen name={ABOUT} component={About} />
      <Tab.Screen name={INFO} component={Info} />
    </Tab.Navigator>
  );
};

export const MainStackScreen = () => {
  const auth = useSelector((state) => state.token);
  const insets = useSafeAreaInsets();
  const defaultModalScreenOptions = {
    headerShown: false,
    cardStyle: {opacity: 0.8, backgroundColor: Colors.white},
  };
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
            backgroundColor: Colors.black,
          },
          headerTitleAlign: 'center',
          headerTintColor: Colors.white,
          headerLeft: () => null,
        }}>
        {auth.token || auth.loggedIn ? (
          <>
            <Stack.Screen
              name={WELCOME_HOME}
              component={WelcomeHome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={SCREEN_STACK}
              component={MyTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={HOME_SCREEN}
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={PROFILE_SCREEN}
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={SETTINGS_SCREEN}
              component={Settings}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={LIBRARY}
              component={Library}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REDUX_COUNTER}
              component={Counter}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={TAB_SCREEN}
              component={Tabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={PRACTICE_SCREEN}
              component={Practice}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={NETWORK_REQUEST}
              component={Network}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={ABOUT}
              component={About}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={INFO}
              component={Info}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS}
              component={ReactHooks}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS_EFFECT}
              component={UseEffect}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS_REF}
              component={UseRef}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS_STATE}
              component={UseState}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS_MEMO}
              component={UseMemo}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS_REDUCER}
              component={UseReducer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS_CONTEXT}
              component={UseContext}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS_CALLBACK}
              component={UseCallback}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REDUX}
              component={Redux}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REDUX_TODOS}
              component={Posts}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={REACT_HOOKS_USER}
              component={UseUser}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={NETWORK_FETCH}
              component={Fetch}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={COUNTER}
              component={CounterView}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={CLASS_ROOM}
              component={ClassRoom}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={CHOOSE_CITIES}
              component={ChooseCities}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={CITY_INFO_MODAL}
              component={CityInfoModal}
              options={defaultModalScreenOptions}
            />
            <Stack.Screen
              name={SELECT_ITEM}
              component={SelectItem}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={SORT_ITEM}
              component={SortItem}
              options={{headerShown: false}}
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
