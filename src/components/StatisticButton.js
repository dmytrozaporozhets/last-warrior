import React from 'react';
import {Colors} from '../styling';
import {Text} from './index';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const StatisticButton = ({
  category,
  quantity,
  onPress,
  containerStyle,
  textQuantityStyle,
  textCategoryStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: 70,
          height: 50,
          backgroundColor: Colors.blue3,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle,
      ]}
      onPress={onPress}>
      <Text style={[{color: Colors.white}, textQuantityStyle]}>{quantity}</Text>
      <Text style={[{color: Colors.white}, textCategoryStyle]}>{category}</Text>
    </TouchableOpacity>
  );
};

StatisticButton.defaultProps = {
  onPress: () => null,
  containerStyle: [],
  textQuantityStyle: [],
  textCategoryStyle: [],
};

StatisticButton.propTypes = {
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textQuantityStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textCategoryStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default StatisticButton;
