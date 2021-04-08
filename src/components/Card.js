import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styling';
import {CardStyle} from '../styling/components/Card';
import Text from './Text';

const Card = ({title, onPress, img}) => (
  <TouchableOpacity
    style={CardStyle.container}
    activeOpacity={1}
    onPress={onPress}>
    <Image source={img} style={CardStyle.img} />
    <View style={CardStyle.txtContainer}>
      <Text style={CardStyle.txt} semiBold>
        {title}
      </Text>
      <Icon name="arrow-right" size={16} color={Colors.white} solid />
    </View>
  </TouchableOpacity>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
