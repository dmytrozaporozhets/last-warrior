import React from 'react';
import {StatusBar, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {MyTabs} from '../navigation/navigation';

const ScreenView = ({
  statusBarColor = '#fff',
  navigationMenuColor = statusBarColor,
  children,
  barStyle,
  needTabBar = false,
  childrenStyle,
}) => {
  return (
    <>
      <SafeAreaView
        forceInset={{vertical: 'never'}}
        style={{flex: 0, backgroundColor: statusBarColor}}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: navigationMenuColor}}>
        <StatusBar
          barStyle={barStyle || 'dark-content'}
          backgroundColor={statusBarColor}
        />
        <View style={[{flex: 1}, childrenStyle]}>{children}</View>
        {needTabBar && <MyTabs />}
      </SafeAreaView>
    </>
  );
};

export default ScreenView;
