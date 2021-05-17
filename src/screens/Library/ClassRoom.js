import React from 'react';
import {View, ScrollView} from 'react-native';
import {ScreenView, Text} from '../../components';
import {Colors} from '../../styling';

class ClassRoom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScreenView statusBarColor={Colors.black}>
        <ScrollView>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: Colors.white, fontSize: 24}} bold>
              Welcome
            </Text>
          </View>
        </ScrollView>
      </ScreenView>
    );
  }
}

export default ClassRoom;
