import React from 'react';
import {ScreenView, Text} from '../components/index';
import {View, ScrollView} from 'react-native';
import {fetchRequest} from '../services/NetworkRequest';
import {requestTodosURL} from '../../assets/link/request';

const Network = () => {
  const body = {
    name: 'Dimon',
    age: 26,
  };

  fetchRequest(requestTodosURL, 'GET', null)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  return (
    <ScreenView>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Network request</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Network;
