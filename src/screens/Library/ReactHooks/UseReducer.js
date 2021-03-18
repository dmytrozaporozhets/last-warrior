import React, {useState} from 'react';
import {Button, ScreenView, Text} from '../../../components';
import {View, ScrollView} from 'react-native';
import {sg} from '../../../styling';
import {ReactHooksStyle} from '../../../styling/screens/ReactHooks';

const UseReducer = () => {
  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ReactHooksStyle.container}>
          <View style={sg.mT20}>
            <Text style={ReactHooksStyle.title}>title</Text>
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default UseReducer;
