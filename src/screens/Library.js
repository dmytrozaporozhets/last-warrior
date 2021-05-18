import React, {useRef} from 'react';
import {ScreenView, Text} from '../components';
import {
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Animated,
  View,
} from 'react-native';
import {highBuild, work} from '../../assets/link/image';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, sg} from '../styling';
import {LIBRARY_GUIDE} from './constants';
import {LibraryStyle} from '../styling/screens/Library';
import {libraryScreen} from '../constants';

const Library = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground
        source={highBuild}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <ScrollView style={[sg.flex, sg.pT25]}>
          {libraryScreen.map((it) => (
            <View style={{marginHorizontal: 20, marginTop: 20}} key={it.id}>
              <Text
                style={[sg.fS24, {color: Colors.yellow}]}
                bold
                onPress={goTo(it.pathway)}>
                {it.id}. {it.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </ScreenView>
  );
};

export default Library;
