import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../components/index';
import PropTypes from 'prop-types';

const Button = ({title, onPress, style, disabled, activeOpacity}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[
        {
          height: 40,
          borderWidth: 2,
          borderRadius: 14,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow',
          borderColor: 'black',
          width: '100%',
        },
        style,
      ]}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: 'black',
        }}
        bold>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.defaultProps = {
  disabled: false,
  style: [],
  activeOpacity: 0.5,
  onPress: () => null,
};

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string,
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  onPress: PropTypes.any,
};
