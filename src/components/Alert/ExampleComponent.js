import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '../index';
import {sg} from '../../styling';
import {useAlert} from './AlertContext';

const ExampleComponent = () => {
  const {onToggle} = useAlert();
  return (
    <View style={[sg.mT20, sg.aICenter]}>
      <Text style={{textAlign: 'center', fontSize: 26, lineHeight: 32}} bold>
        Hello in the example with Context
      </Text>
      <Button
        btnType="primary"
        size="small"
        title="Show Alert"
        style={sg.mT10}
        onPress={onToggle}
      />
    </View>
  );
};

export default ExampleComponent;
