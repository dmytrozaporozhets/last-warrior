import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

export const Example = ({navigation}) => {
  const onBack = () => navigation.goBack();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 45,
        padding: 23,
      }}>
      <Button title="Back" onPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    height: 44,
    padding: 53,
  },
});
