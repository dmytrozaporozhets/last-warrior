import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import {Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, sg} from '../styling';
import {InputStyle} from '../styling/components/Input';
import PropTypes from 'prop-types';

const Input = ({
  numberOfLines,
  value,
  label,
  securedEntry,
  onChange,
  containerStyle,
  labelStyle,
  editable,
  onError,
  dark,
  errorText,
  verification,
  info,
  onVerification,
  isCardNumber,
  isExpiryDate,
  placeholder,
  light,
  search,
}) => {
  const multiline = numberOfLines && numberOfLines > 1;
  const [isPasswordVisible, setPassVisibility] = useState(!!securedEntry);
  const switchVisibility = () => setPassVisibility(!isPasswordVisible);

  const renderBorderColor = () => {
    if (errorText) {
      return Colors.red;
    }
    if (verification) {
      return Colors.jungleGreen;
    }
    if (dark) {
      return Colors.white;
    } else {
      return Colors.header;
    }
  };

  const onEdit = (val) => {
    if (isCardNumber) {
      onChange(val.replace(/ /g, ''));
    } else {
      onChange(val);
    }
  };

  const getCardNumber = () =>
    value
      .replace(/\W/gi, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();

  const getExpiryDate = () => value.replace(/(^\d{2})(\d)/, '$1/$2');

  const renderValue = () => {
    if (isCardNumber) {
      return getCardNumber();
    }
    if (isExpiryDate) {
      return getExpiryDate();
    } else {
      return value;
    }
  };

  return (
    <View style={[{minHeight: search ? 50 : 70}, containerStyle]}>
      {!search && (
        <Text
          style={[
            InputStyle.labelTxt,
            {color: dark ? Colors.blackNero : Colors.white},
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={isPasswordVisible}
          placeholder={placeholder}
          editable={editable}
          value={renderValue()}
          selectionColor="#FFE483"
          style={{
            color:
              editable === false
                ? Colors.darkGray
                : dark
                ? Colors.white
                : Colors.blackNero,
            minHeight: multiline ? numberOfLines * 22 : 22,
            ...InputStyle.input,
            paddingRight: securedEntry ? 50 : 20,
            borderColor: renderBorderColor(),
            backgroundColor: editable === false ? Colors.gray : Colors.white,
          }}
          onChangeText={onEdit}
        />
        {securedEntry && value.length > 0 && (
          <TouchableOpacity style={InputStyle.eye} onPress={switchVisibility}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-slash'}
              style={[
                sg.fS16,
                {
                  color: light
                    ? Colors.black
                    : dark
                    ? Colors.white
                    : Colors.blackNero,
                },
              ]}
            />
          </TouchableOpacity>
        )}
        {errorText && !securedEntry && (
          <TouchableOpacity style={InputStyle.eye} onPress={onError}>
            <Icon name="info-circle" style={[sg.fS16, {color: Colors.red}]} />
          </TouchableOpacity>
        )}
        {info && (
          <TouchableOpacity style={InputStyle.eye} onPress={onError}>
            <Icon
              name="info-circle"
              style={[sg.fS18, {color: Colors.orange}]}
            />
          </TouchableOpacity>
        )}
        {verification && (
          <TouchableOpacity style={InputStyle.eye} onPress={onVerification}>
            <Icon
              name="check-circle"
              style={{...sg.fS18, color: Colors.jungleGreen}}
            />
          </TouchableOpacity>
        )}
        {search && (
          <View style={InputStyle.search}>
            <Icon name="search" style={[sg.fS18, {color: Colors.gray6}]} />
          </View>
        )}
        {errorText !== undefined && (
          <View style={sg.height25}>
            {errorText && <Text style={InputStyle.errorText}>{errorText}</Text>}
          </View>
        )}
      </View>
    </View>
  );
};

Input.defaultProps = {
  containerStyle: [],
  labelStyle: [],
  editable: true,
  dark: false,
  light: false,
  verification: false,
  info: false,
  search: false,
  isCardNumber: false,
  isExpiryDate: false,
  onError: () => null,
  onVerification: () => null,
  onChange: () => null,
};

Input.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  numberOfLines: PropTypes.number,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  securedEntry: PropTypes.bool,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  verification: PropTypes.bool,
  errorText: PropTypes.bool,
  errorCard: PropTypes.bool,
  errorSecurityCode: PropTypes.bool,
  isCardNumber: PropTypes.bool,
  isExpiryDate: PropTypes.bool,
  search: PropTypes.bool,
  onError: PropTypes.any,
  onVerification: PropTypes.any,
  onChange: PropTypes.any,
};

export default Input;
