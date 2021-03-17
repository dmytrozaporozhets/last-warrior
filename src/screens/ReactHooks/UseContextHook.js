import React from 'react';
import {Alert, ExampleComponent, ScreenView} from '../../components/index';
import {View, ScrollView} from 'react-native';
import {ReactHooksStyle} from '../../styling/screens/ReactHooks';
import {AlertProvider} from '../../components/Alert/AlertContext';

const UseContextHook = () => {
  return (
    <AlertProvider>
      <ScreenView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={ReactHooksStyle.container}>
            <Alert />
            <ExampleComponent />
          </View>
        </ScrollView>
      </ScreenView>
    </AlertProvider>
  );
};

export default UseContextHook;
