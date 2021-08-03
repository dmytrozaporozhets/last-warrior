import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Input, ScreenView, Text} from '../../../components';
import {sg} from '../../../styling';

const useLogger = (value) => {
  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (value) => {
    setValue(value);
  };

  const onClear = () => setValue('');

  return {bind: {value, onChange}, value, onClear};
};

const UseUser = () => {
  const name = useInput('');
  const lastName = useInput('');

  useLogger(name.value);
  // useLogger(lastName.value);

  return (
    <ScreenView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={{flex: 1, marginHorizontal: 30}}>
          <View
            style={[
              sg.height60,
              sg.width100p,
              sg.mT20,
              sg.pH20,
              sg.aSCenter,
              sg.border,
              {borderRadius: 14},
            ]}>
            <Text style={[sg.mT20, sg.fS18, {textAlign: 'center'}]}>
              {lastName.value} {name.value}
            </Text>
          </View>
          <View style={sg.center}>
            <View style={[sg.row]}>
              <Input
                label="Name"
                {...name.bind}
                containerStyle={[sg.width150, sg.mR20]}
              />
              <Button
                size="small"
                btnType="red"
                title="Clear"
                onPress={name.onClear}
                style={sg.mT30}
              />
            </View>
            <View style={[sg.row]}>
              <Input
                label="Last Name"
                {...lastName.bind}
                containerStyle={[sg.width150, sg.mR20]}
              />
              <Button
                size="small"
                btnType="red"
                title="Clear"
                onPress={lastName.onClear}
                style={sg.mT30}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default UseUser;
