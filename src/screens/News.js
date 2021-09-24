import React from 'react';
import {Header, ScreenView, Text} from '../components';
import {ScrollView, View} from 'react-native';
import {Colors} from '../styling';

const News = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header logo />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={{color: Colors.white, fontSize: 24}} bold>
            News screen
          </Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default News;
