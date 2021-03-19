import React, {useEffect} from 'react';
import {ScreenView, Text} from '../../components';
import {View, ScrollView} from 'react-native';
// import firebase from '@react-native-firebase/app';
// import dynamicLinks from '@react-native-firebase/dynamic-links';

// function DynamicLinks() {
//   useEffect(() => {
//     dynamicLinks()
//       .getInitialLink()
//       .then((link) => {
//         console.log(link);
//         console.log(link.url);
//       });
//   }, []);
//
//   return null;
// }

const Network = () => {
  return (
    <ScreenView>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {/*<DynamicLinks />*/}
          <Text>Network request</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Network;
