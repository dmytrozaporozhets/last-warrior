import React, {useRef} from 'react';
import {ScreenView, Text} from '../components';
import {
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Animated,
} from 'react-native';
import {work} from '../../assets/link/image';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styling';
import {LIBRARY_GUIDE} from './constants';
import {LibraryStyle} from '../styling/screens/Library';

const Library = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);

  const animatedGuide = useRef(new Animated.Value(0)).current;

  const onShow = () => {
    Animated.timing(animatedGuide, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScreenView>
      <ImageBackground source={work} style={LibraryStyle.image}>
        <ScrollView
          contentContainerStyle={LibraryStyle.container}
          onScrollBeginDrag={onShow}>
          <Animated.View
            style={{
              opacity: animatedGuide,
            }}>
            <TouchableOpacity
              style={LibraryStyle.button}
              onPress={goTo(LIBRARY_GUIDE)}>
              <Text style={LibraryStyle.text} bold>
                GUIDE
              </Text>
              <Icon name="arrow-right" size={24} color={Colors.black} solid />
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </ImageBackground>
    </ScreenView>
  );
};

export default Library;
