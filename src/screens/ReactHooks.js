import React from 'react';
import {Button, ScreenView, Text} from '../components/index';
import {View, ScrollView} from 'react-native';

const ReactHooks = () => {
  return (
    <ScreenView>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text>React Hooks</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default ReactHooks;
