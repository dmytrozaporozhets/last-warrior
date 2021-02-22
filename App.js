import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {rootReducer} from './src/redax/rootReducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import Navigation from './src/screens/Navigation';
import styleGlobal from './src/styling/styleGlobal';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styleGlobal.flex}>
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;
