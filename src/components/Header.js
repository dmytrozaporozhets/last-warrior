import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Colors, sg} from '../styling';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from './index';
import {HeaderStyle} from '../styling/components/Header';

const Header = ({onBack, title, onSkip, onSort}) => {
  return (
    <View style={HeaderStyle.container}>
      {onBack && (
        <TouchableOpacity
          onPress={onBack}
          style={[HeaderStyle.position, sg.left20]}>
          <Icon name="caret-left" size={22} color={Colors.yellow} />
        </TouchableOpacity>
      )}
      <Text style={HeaderStyle.header}>{title}</Text>
      {onSkip && (
        <TouchableOpacity
          onPress={onSkip}
          style={[HeaderStyle.position, sg.right20]}>
          <Icon name="caret-right" size={22} color={Colors.yellow} />
        </TouchableOpacity>
      )}
      {onSort && (
        <TouchableOpacity
          onPress={onSort}
          style={[HeaderStyle.position, sg.right20]}>
          <Icon name="sort" size={22} color={Colors.yellow} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
