import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../components/index';
import PropTypes from 'prop-types';
import {ButtonStyleSize, ButtonStyleType} from '../styling/components/Button';

const Button = ({
  title,
  onPress,
  style,
  disabled,
  activeOpacity,
  btnType,
  color,
  size,
}) => {
  let type = btnType;
  if (disabled) {
    type = 'disabled';
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[
        ButtonStyleSize[size].container,
        ButtonStyleType[type].backColor,
        ButtonStyleType[type].border,
        style,
      ]}>
      <Text
        style={[
          ButtonStyleSize[size].txt,
          ButtonStyleType[type].txt,
          color && {color},
        ]}
        bold>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.defaultProps = {
  btnType: 'yellow',
  size: 'large',
  disabled: false,
  style: {},
  activeOpacity: 0.5,
  onPress: () => null,
};

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  btnType: PropTypes.oneOf(['yellow', 'orange']),
  size: PropTypes.oneOf(['large', 'medium']),
  title: PropTypes.string,
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  onPress: PropTypes.any,
};
