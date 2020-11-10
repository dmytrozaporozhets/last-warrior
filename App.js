import 'react-native-gesture-handler';
import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./component/HomeScreen";
import ProfileScreen from "./component/ProfileScreen";
import Display from './component/Display'
import About from "./component/About";
import Info from "./component/Info";
import Form from "./component/Form";
import Account from "./component/page/Account";
import Example from './component/page/Example'
import Test from "./component/page/Test";
import ComeInOAuth from "./component/page/ComeInOAuth";
import MyPage from "./component/page/MyPage";

const Stack = createStackNavigator();

const App = () => {

    return (
        <View style={styles.main}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MyPage">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Welcome',
                            headerStyle: {
                                backgroundColor: 'pink',
                            },
                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 30,
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                    />
                    <Stack.Screen
                        name="Display"
                        component={Display}
                    />
                    <Stack.Screen
                        name="Form"
                        component={Form}
                    />
                    <Stack.Screen
                        name="About"
                        component={About}
                    />
                    <Stack.Screen
                        name="Info"
                        component={Info}
                    />
                    <Stack.Screen
                        name="Account"
                        component={Account}
                    />
                    <Stack.Screen
                        name="Example"
                        component={Example}
                    />
                    <Stack.Screen
                        name="Test"
                        component={Test}
                    />
                    <Stack.Screen
                        name="ComeInOAuth"
                        component={ComeInOAuth}
                    />
                    <Stack.Screen
                        name="MyPage"
                        component={MyPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
})


export default App;