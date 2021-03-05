import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../components/index';
import PropTypes from 'prop-types';

const Button = ({title, onPress, style, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.5}
      style={[
        {
          width: 100,
          height: 50,
          borderWidth: 2,
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          borderColor: 'black',
        },
        style,
      ]}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: 'white',
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
  onPress: () => null,
};

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.any,
};
