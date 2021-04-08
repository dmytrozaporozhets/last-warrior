import {ScrollView, View} from 'react-native';
import React from 'react';
import {CityCard, ScreenView, Text} from '../../components';
import {Colors, sg} from '../../styling';
import {fakeCities} from '../../constants';

const SelectCard = () => {
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: 30,
        }}>
        <View>
          {fakeCities.map((it, index) => (
            <CityCard {...it} key={it.id} style={index !== 0 && sg.mT10} />
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default SelectCard;
