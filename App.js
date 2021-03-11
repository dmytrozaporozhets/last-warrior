import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {rootReducer} from './src/redax/rootReducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {MainStackScreen} from './src/navigation/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-view';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainStackScreen />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
