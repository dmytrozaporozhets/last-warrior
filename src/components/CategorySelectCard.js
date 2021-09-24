import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {Text} from './index';
import {CategorySelectCardStyle} from '../styling/components/CategorySelectCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styling';

const CategorySelectCard = ({title, image, selected, onPress, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[CategorySelectCardStyle.container, style]}>
      {selected && (
        <View style={CategorySelectCardStyle.box}>
          <Icon name="check" size={20} color={Colors.white} />
        </View>
      )}
      <Image source={image} style={CategorySelectCardStyle.image} />
      <Text style={CategorySelectCardStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategorySelectCard;
