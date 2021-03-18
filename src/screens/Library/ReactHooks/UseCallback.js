import React, {useState, useCallback} from 'react';
import {Button, ScreenView, Text} from '../../../components';
import {View, ScrollView} from 'react-native';
import {sg} from '../../../styling';
import {ReactHooksStyle} from '../../../styling/screens/ReactHooks';
import {elementState} from '../../../constants';
import ItemsList from '../../../components/ItemsList';

const UseCallback = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const switchElements = (func) => () => {
    switch (func) {
      case 'add':
        return setCount((prev) => prev + 1);
      case 'change':
        return setColored((prev) => !prev);
      default:
        return;
    }
  };

  const styles = {color: colored ? 'red' : 'black'};

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ReactHooksStyle.container}>
          <View style={sg.mT20}>
            <Text style={[ReactHooksStyle.title, styles]}>
              Amount of elements: {count}
            </Text>
            <View style={[sg.centeredRow, sg.mT10, sg.jCCenter]}>
              {elementState.map((it, index) => (
                <Button
                  title={it.title}
                  size={it.size}
                  btnType={it.btnType}
                  style={[index !== 0 && sg.mL10]}
                  onPress={switchElements(it.func)}
                  key={it.id}
                />
              ))}
            </View>
            <ItemsList getItems={generateItemsFromAPI} style={sg.mT20} />
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default UseCallback;
