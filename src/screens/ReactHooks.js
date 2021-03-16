import React, {useState, useMemo} from 'react';
import {Button, ScreenView, Text} from '../components/index';
import {View, ScrollView} from 'react-native';
import {sg} from '../styling';
import {ReactHooksStyle} from '../styling/screens/ReactHooks';
import {numberData, reactHooks} from '../constants';

const complexComputed = (num) => {
  // let i = 0;
  // while (i < 10000000000) {
  //   i++;
  // }
  return num * 2;
};

const ReactHooks = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ReactHooksStyle.container}>
          {reactHooks.map((it) => (
            <View style={[sg.mT20, sg.width100p]}>
              <Button {...it} onPress={goTo(it.pathway)} key={it.id} />
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default ReactHooks;
