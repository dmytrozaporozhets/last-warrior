import 'react-native-gesture-handler';
import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import { Provider } from 'react-redux';
import {rootReducer} from "./Redux/Display/rootReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import Navigation from "./src/Navigation";



const store = createStore (
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {

    return (
        <Provider store={store}>
                <View style={styles.main}>
                    <Navigation/>
                </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
})


export default App;