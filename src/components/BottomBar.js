import React from 'react';
import {
  ABOUT_SCREEN,
  DISPLAY_SCREEN,
  INFO_SCREEN,
  PROFILE_SCREEN,
} from '../screens';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuTypes = {
  Profile: {id: 0},
  Display: {id: 1},
  About: {id: 2},
  Info: {id: 3},
};

const getIconView = (icon, selected) => {
  return <Icon name={icon} size={32} fill={selected ? '#282828' : '#959595'} />;
};

const menuItems = [
  {
    id: MenuTypes.Profile,
    routeName: PROFILE_SCREEN,
    title: 'Profile',
    getIcon: (icon, selected) => getIconView(icon, selected),
  },
];

export const BottomNavigationBar = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          borderTopWidth: 1,
          borderColor: '#C4C4C4',
        }}>
        {menuItems.map((item) => {
          const selected = selectedMenu === item.routeName;
          return (
            <TouchableOpacity
              key={item.id}
              style={BottomNavigationBarStyle.buttonContainer}
              onPress={this.navigate.bind(this, item.routeName)}>
              {item.getIcon(selected)}
              <Text
                style={[
                  BottomNavigationBarStyle.buttonText,
                  selected ? {color: '#282828'} : {},
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
