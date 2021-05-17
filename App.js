import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {rootReducer} from './src/redax/rootReducer';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {MainStackScreen} from './src/navigation/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from './src/redax/saga';
import firebase from '@react-native-firebase/app';
import dynamicLinks from '@react-native-firebase/dynamic-links';
const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, saga)),
  // forbiddenWordsMiddleware,
);

saga.run(sagaWatcher);

const App = () => {
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then((link) => {
        console.log(link);
        console.log(link.url);
      });
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainStackScreen />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
