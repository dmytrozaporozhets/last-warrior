import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { useSelector} from 'react-redux';
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import DisplayScreen from "./Screens/DisplayScreen";
import AboutScreen from "./Screens/AboutScreen";
import InfoScreen from "./Screens/InfoScreen";
import FormScreen from "./Screens/FormScreen";
import ComeInOAuth from "./Form/ComeInOAuth";
import SignInScreen from "./Form/SignInScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createStackNavigator();

const Navigation = () => {

    const authentication = useSelector(state => state.token);

    // console.log(state);

    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Form'
                    headerMode="none"
                >
                    {authentication.token || authentication.loggedIn
                        ? (
                            <>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Profile" component={ProfileScreen} />
                                <Stack.Screen name="Display" component={DisplayScreen} />
                                <Stack.Screen name="About" component={AboutScreen} />
                                <Stack.Screen name="Info" component={InfoScreen} />
                            </>
                        )
                        : (
                            <>
                                <Stack.Screen name="Form" component={FormScreen} />
                                <Stack.Screen name="ComeInOAuth" component={ComeInOAuth} />
                                <Stack.Screen name="SignIn" component={SignInScreen} />
                            </>
                        )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default Navigation;