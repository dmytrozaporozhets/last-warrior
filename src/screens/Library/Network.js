import React from 'react';
import {Button, Header, ScreenView} from '../../components';
import {View, ScrollView} from 'react-native';
import {Colors, sg} from '../../styling';
// import firebase from '@react-native-firebase/app';
// import dynamicLinks from '@react-native-firebase/dynamic-links';
import {NETWORK_FETCH} from '../../navigation/constants';

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

const Network = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  const goBack = () => navigation.goBack();
  return (
    <ScreenView
      childrenStyle={{backgroundColor: Colors.black}}
      statusBarColor={Colors.black}>
      <Header onBack={goBack} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          {/*<DynamicLinks />*/}
          <Button title="Fetch" style={sg.mT30} onPress={goTo(NETWORK_FETCH)} />
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Network;
