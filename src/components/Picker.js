import React, {useState} from 'react';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, sg} from '../styling';
import {PickerStyle} from '../styling/components/Picker';
import {Text} from '../components';
import {isIos} from '../utils';
import PropTypes from 'prop-types';

const Picker = (props) => {
  const {
    initialValue,
    onSelect,
    items,
    containerStyle,
    labelStyle,
    pickerStyle,
    label,
    icon,
    centered,
    dark,
  } = props;
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const renderIcon = () => {
    return (
      <Icon
        name="chevron-down"
        size={16}
        color={dark ? Colors.white : Colors.black}
      />
    );
  };

  const darkTheme = dark
    ? {backgroundColor: Colors.header, borderColor: Colors.white}
    : {backgroundColor: Colors.white, borderColor: Colors.black};

  const submit = () => onSelect(selectedValue);

  const onChoose = (val) => onSelect(val);

  return (
    <View style={[sg.flex, containerStyle]}>
      {label && <Text style={[PickerStyle.label, labelStyle]}>{label}</Text>}
      <View style={[PickerStyle.container, darkTheme, pickerStyle]}>
        <RNPickerSelect
          Icon={icon ? renderIcon : null}
          style={{
            viewContainer: PickerStyle.viewContainer,
            inputAndroid: PickerStyle.inputAndroid,
            inputIOS: {
              ...PickerStyle.inputIOS,
              textAlign: centered ? 'center' : 'left',
              color: dark ? Colors.white : Colors.header,
            },
            iconContainer: PickerStyle.iconContainer,
            placeholder: {color: dark ? Colors.white : Colors.gray6},
          }}
          value={selectedValue}
          onValueChange={isIos ? setSelectedValue : onChoose}
          onDonePress={submit}
          onClose={submit}
          items={items}
          {...props}
        />
      </View>
    </View>
  );
};

Picker.defaultProps = {
  icon: true,
  centered: false,
  dark: false,
  containerStyle: [],
  pickerStyle: [],
  labelStyle: [],
  onSelect: () => null,
};

Picker.propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  initialValue: PropTypes.string,
  icon: PropTypes.bool,
  centered: PropTypes.bool,
  dark: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  pickerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Picker;
