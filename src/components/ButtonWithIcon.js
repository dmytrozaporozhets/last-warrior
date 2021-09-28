import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, sg} from '../styling';
import {Text} from './index';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {ButtonWithIconStyle} from '../styling/components/ButtonWithIcon';

const ButtonWithIcon = ({
  text,
  icon,
  disabled,
  color,
  containerStyle,
  textStyle,
  boldText,
  onPress,
  container,
  rightIcon,
}) => {
  const defaultColor = {
    color: disabled ? Colors.gray : color ? color : Colors.link,
  };
  return (
    <TouchableOpacity
      style={[
        sg.centeredRow,
        container && ButtonWithIconStyle.container,
        containerStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.5}>
      {rightIcon ? (
        <>
          <Icon name={icon} style={[sg.fS16, defaultColor, textStyle]} />
          <Text
            style={[ButtonWithIconStyle.textLeft, defaultColor, textStyle]}
            bold={boldText}>
            {text}
          </Text>
        </>
      ) : (
        <>
          <Text
            style={[ButtonWithIconStyle.textRight, defaultColor, textStyle]}
            bold={boldText}>
            {text}
          </Text>
          <Icon name={icon} style={[sg.fS16, defaultColor, textStyle]} />
        </>
      )}
    </TouchableOpacity>
  );
};

ButtonWithIcon.defaultProps = {
  color: Colors.link,
  disabled: false,
  container: false,
  boldText: false,
  rightIcon: false,
  containerStyle: [],
  textStyle: [],
  onPress: () => null,
};

ButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  boldText: PropTypes.bool,
  disabled: PropTypes.bool,
  container: PropTypes.bool,
  rightIcon: PropTypes.bool,
  color: PropTypes.string,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ButtonWithIcon;
