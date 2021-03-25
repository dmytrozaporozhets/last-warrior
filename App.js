import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {rootReducer} from './src/redax/rootReducer';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {MainStackScreen} from './src/navigation/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from './src/redax/saga';

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, saga)),
  // forbiddenWordsMiddleware,
);

saga.run(sagaWatcher);

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
