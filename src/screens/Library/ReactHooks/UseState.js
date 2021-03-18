import React, {useState} from 'react';
import {Button, ScreenView, Text} from '../../../components';
import {View, ScrollView} from 'react-native';
import {sg} from '../../../styling';
import {ReactHooksStyle} from '../../../styling/screens/ReactHooks';
import {counterData} from '../../../constants';

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [card, setCard] = useState({title: 'Counter', date: Date.now()});

  const updateTitle = () => {
    setCard((prev) => {
      return {...prev, title: 'New title'};
    });
  };

  const switchCounter = (operation) => () => {
    switch (operation) {
      case 'add':
        return setCounter(counter + 1);
      case 'sub':
        return setCounter(counter - 1);
      default:
        return;
    }
  };

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ReactHooksStyle.container}>
          <View style={sg.mT20}>
            <Text style={ReactHooksStyle.title}>Counter: {counter}</Text>
            <View style={[sg.centeredRow, sg.mT10, sg.jCCenter]}>
              {counterData.map((it, index) => (
                <Button
                  title={it.title}
                  size={it.size}
                  btnType={it.btnType}
                  onPress={switchCounter(it.operation)}
                  style={[index !== 0 && sg.mL10]}
                  key={it.id}
                />
              ))}
            </View>
            <View style={[sg.centeredRow, sg.mT20]}>
              <Text style={sg.mR20}>{JSON.stringify(card, null, 2)}</Text>
              <Button
                title="Change title"
                size="small"
                btnType="blue"
                onPress={updateTitle}
                style={sg.width120}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default UseState;
