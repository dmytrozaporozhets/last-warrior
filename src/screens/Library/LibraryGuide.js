import React from 'react';
import {Text, ScreenView} from '../../components';
import {View, ScrollView, ImageBackground} from 'react-native';
import {Colors, sg} from '../../styling';
import {libraryScreen} from '../../constants';
import {highBuild} from '../../../assets/link/image';

const LibraryGuide = ({navigation}) => {
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

export default LibraryGuide;
