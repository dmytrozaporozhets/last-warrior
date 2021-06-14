import React from 'react';
import {Colors, sg} from '../styling';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from './index';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Checkbox = ({
  title,
  icon,
  onPress,
  containerStyle,
  id,
  colorIcon,
  textStyle,
  iconStyle,
  sizeIcon,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          ...sg.centeredRow,
          borderWidth: 1,
          borderColor: Colors.white,
          ...sg.p10,
          ...sg.width100p,
        },
        containerStyle,
      ]}
      key={id}
      activeOpacity={0.5}
      onPress={onPress}>
      <Icon
        name={icon}
        size={sizeIcon}
        color={colorIcon}
        style={[sg.mH10, iconStyle]}
      />
      <Text style={[{color: Colors.btnPrimaryBG, fontSize: 20}, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Checkbox.defaultProps = {
  containerStyle: [],
  iconStyle: [],
  textStyle: [],
  sizeIcon: 20,
  colorIcon: Colors.btnPrimaryBG,
  onPress: () => null,
};

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  colorIcon: PropTypes.string,
  sizeIcon: PropTypes.number,
  onPress: PropTypes.any,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  iconStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Checkbox;
