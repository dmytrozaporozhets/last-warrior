import React, {useState} from 'react';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, sg} from '../styling';
import {PickerStyle} from '../styling/components/Picker';
import {Text} from '../components';

const Picker = (props) => {
  const {
    initialValue,
    onSelect,
    items,
    containerStyle,
    label,
    icon = true,
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

  return (
    <View style={sg.flex}>
      {label && <Text style={PickerStyle.label}>{label}</Text>}
      <View style={[PickerStyle.container, darkTheme, containerStyle]}>
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
          onValueChange={(value) => {
            onSelect(value);
            setSelectedValue(value);
          }}
          items={items}
          {...props}
        />
      </View>
    </View>
  );
};

export default Picker;
