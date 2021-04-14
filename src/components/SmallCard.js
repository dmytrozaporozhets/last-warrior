import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Text} from './index';
import PropTypes from 'prop-types';
import {SmallCardStyle} from '../styling/components/SmallCard';

const SmallCard = ({title, image, onPress, style, imageStyle, textStyle}) => {
  return (
    <TouchableOpacity
      style={[SmallCardStyle.container, style]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Image source={image} style={[SmallCardStyle.image, imageStyle]} />
      <Text style={[SmallCardStyle.text, textStyle]} semiBold>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

SmallCard.defaultProps = {
  style: [],
  onPress: () => null,
  imageStyle: [],
  textStyle: [],
};

SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
  imageStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default SmallCard;
