import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {sg} from '../styling';
import {Text} from '../components';
import {DatePickerStyle} from '../styling/components/DatePicker';

const DatePicker = ({label, onConfirm, value, style}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const switchVisibility = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    onConfirm(
      `${day <= 9 ? '0' + day : day}/${
        month <= 9 ? '0' + month : month
      }/${year}`,
    );
    switchVisibility();
  };

  return (
    <View style={[sg.flex, style]}>
      <Text style={DatePickerStyle.label}>{label}</Text>
      <TouchableOpacity
        style={DatePickerStyle.button}
        onPress={switchVisibility}>
        <Text>{value}</Text>
        <Icon name="calendar-day" style={DatePickerStyle.icon} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={switchVisibility}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;
