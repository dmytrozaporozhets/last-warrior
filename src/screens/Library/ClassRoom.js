import React from 'react';
import {View, ScrollView} from 'react-native';
import {ScreenView, SmallCard, Text} from '../../components';
import {Colors, sg} from '../../styling';

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
              Class Room
            </Text>
          </View>
        </ScrollView>
      </ScreenView>
    );
  }
}

export default ClassRoom;
