import React from 'react';
import {Header, ScreenView} from '../../components';
import HandlerCounter from '../../components/HandlerCounter';
import {ScrollView, View} from 'react-native';
import {Colors, sg} from '../../styling';
import {useDispatch, useSelector} from 'react-redux';
import {decrementCounter, incrementCounter} from '../../redax/interface';

const CounterView = ({navigation}) => {
  const goBack = () => navigation.goBack();
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
    <ScreenView
      statusBarColor={Colors.black}
      childrenStyle={{backgroundColor: Colors.black}}>
      <Header onBack={goBack} />
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
    </ScreenView>
  );
};

export default CounterView;
