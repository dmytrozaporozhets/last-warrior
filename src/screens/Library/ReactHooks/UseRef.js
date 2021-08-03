import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import {ReactHooksStyle} from '../../../styling/screens/ReactHooks';
import {Text, Button, ScreenView} from '../../../components';
import {sg} from '../../../styling';

const UseRef = () => {
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ReactHooksStyle.container}>
          <View style={[sg.mT20, sg.mH15, sg.aICenter]}>
            <Text style={ReactHooksStyle.title}>
              Number of renders: {renderCount.current}
            </Text>
            <Text style={[ReactHooksStyle.title, sg.mT5]}>
              Past state: {prevValue.current}
            </Text>
            <TextInput
              value={value}
              onChangeText={setValue}
              style={[
                sg.width200,
                sg.mV10,
                sg.mB20,
                {
                  borderWidth: 1,
                  borderRadius: 7,
                  height: 30,
                  paddingHorizontal: 10,
                },
              ]}
              ref={inputRef}
            />
            <Button
              title="Focus"
              size="small"
              btnType="green"
              onPress={focus}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default UseRef;
