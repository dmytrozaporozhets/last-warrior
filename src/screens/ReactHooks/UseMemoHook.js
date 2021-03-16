import React, {useState, useMemo} from 'react';
import {Button, ScreenView, Text} from '../../components/index';
import {View, ScrollView} from 'react-native';
import {sg} from '../../styling';
import {ReactHooksStyle} from '../../styling/screens/ReactHooks';
import {numberData} from '../../constants';

const complexComputed = (num) => {
  // let i = 0;
  // while (i < 10000000000) {
  //   i++;
  // }
  return num * 2;
};

const UseMemoHook = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const switchNumber = (operation) => () => {
    switch (operation) {
      case 'add':
        return setNumber(number + 1);
      case 'sub':
        return setNumber(number - 1);
      case 'change':
        return setColored((prev) => !prev);
      default:
        return;
    }
  };

  const styles = {
    color: colored ? 'pink' : 'black',
  };

  const computed = useMemo(() => {
    return complexComputed(number);
  }, [number]);

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ReactHooksStyle.container}>
          <View style={sg.mT20}>
            <Text style={[ReactHooksStyle.title, styles]}>
              Computed property: {computed}
            </Text>
            <View style={[sg.centeredRow, sg.mT10, sg.jCCenter]}>
              {numberData.map((it, index) => (
                <Button
                  title={it.title}
                  size={it.size}
                  btnType={it.btnType}
                  onPress={switchNumber(it.operation)}
                  style={index !== 0 && sg.mL10}
                  key={it.id}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default UseMemoHook;
