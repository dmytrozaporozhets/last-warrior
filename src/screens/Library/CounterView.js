import React from 'react';
import {ScreenView} from '../../components';
import HandlerCounter from '../../components/HandlerCounter';
import {ImageBackground, ScrollView, View} from 'react-native';
import {Colors, sg} from '../../styling';
import {bigBen} from '../../../assets/link/image';
import {useDispatch, useSelector} from 'react-redux';
import {decrementCounter, incrementCounter} from '../../redax/interface';

const CounterView = () => {
  const count = useSelector((state) => state.interface.count);
  const dispatch = useDispatch();
  const switchOperation = (operation) => () => {
    switch (operation) {
      case 'add':
        dispatch(incrementCounter());
        break;
      case 'sub':
        dispatch(decrementCounter());
        break;
      default:
        break;
    }
  };
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground
        source={bigBen}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          margin: 0,
        }}>
        <ScrollView>
          <View style={[sg.flex, sg.mH40]}>
            <HandlerCounter
              value={count}
              style={[sg.aSCenter, sg.mT40]}
              onAddition={switchOperation('add')}
              onSubtraction={switchOperation('sub')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </ScreenView>
  );
};

export default CounterView;
