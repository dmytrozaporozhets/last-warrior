import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {rootReducer} from './src/redax/rootReducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {MainStackScreen} from './src/screens/navigation';
import styleGlobal from './src/styling/styleGlobal';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styleGlobal.flex}>
        <MainStackScreen />
      </View>
    </Provider>
  );
};

export default App;
