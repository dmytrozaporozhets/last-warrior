import React from 'react';
import {Colors} from '../styling';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import {DropDownStyle} from '../styling/components/DropDown';

const DropDown = ({
  items,
  containerStyle,
  style,
  itemStyle,
  labelStyle,
  arrowSize,
  dropDownStyle,
  onChange,
  value,
  controller,
  placeholder,
  zIndex,
  onClose,
  onOpen,
  isVisible,
  error,
  light,
  disabled,
  placeholderStyle,
}) => {
  const getColor = () => {
    if (error) {
      return 'red';
    }
    if (light) {
      return 'black';
    } else {
      return 'white';
    }
  };
  const themedContainer = light
    ? {backgroundColor: Colors.white, borderColor: 'black'}
    : {backgroundColor: Colors.header, borderColor: 'white'};

  return (
    <DropDownPicker
      items={items}
      containerStyle={[DropDownStyle.container, containerStyle]}
      style={[DropDownStyle.style, themedContainer, style]}
      itemStyle={[DropDownStyle.itemStyle, itemStyle]}
      labelStyle={[{color: getColor()}, labelStyle]}
      arrowColor={getColor()}
      arrowSize={arrowSize}
      dropDownStyle={[themedContainer, dropDownStyle]}
      onChangeItem={onChange}
      defaultValue={value}
      controller={controller}
      placeholder={placeholder}
      zIndex={zIndex}
      onClose={onClose}
      onOpen={onOpen}
      isVisible={isVisible}
      error={error}
      disabled={disabled}
      placeholderStyle={placeholderStyle}
    />
  );
};

DropDown.defaultProps = {
  containerStyle: [],
  itemStyle: [],
  labelStyle: [],
  style: [],
  dropDownStyle: [],
  placeholderStyle: {},
  arrowSize: 16,
  isVisible: false,
  error: false,
  light: false,
  onChange: () => null,
  onOpen: () => null,
  onClose: () => null,
};

DropDown.propTypes = {
  items: PropTypes.array.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  containerComponentStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  itemStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  dropDownStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  arrowColor: PropTypes.string,
  arrowSize: PropTypes.number,
  zIndex: PropTypes.number,
  onChange: PropTypes.any,
  onOpen: PropTypes.any,
  onClose: PropTypes.any,
  value: PropTypes.any,
  isVisible: PropTypes.bool,
  error: PropTypes.any,
  placeholderStyle: PropTypes.object,
};

export default DropDown;
