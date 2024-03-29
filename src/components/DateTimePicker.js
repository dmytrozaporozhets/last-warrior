import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {sg, Colors} from '../styling';
import {Text} from '../components';
import {DateTimePickerStyle} from '../styling/components/DateTimePicker';
import {defaultFormatData} from '../utils';

const DateTimePicker = ({
  label,
  onConfirm,
  style,
  initialDate,
  minimumDate,
  maximumDate,
  placeholder,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const defaultDate = new Date();
  const defaultMinimumDate = new Date(1950, 0, 1);
  const defaultMaximumDate = new Date(2100, 0, 1);
  const selectedDate = defaultFormatData(initialDate);
  const defaultDateToFormat = placeholder
    ? placeholder
    : defaultFormatData(defaultDate);

  const switchVisibility = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = (date) => {
    console.log('A date has been picked: ', date);
    onConfirm(date);
    switchVisibility();
  };

  return (
    <View style={style}>
      <Text style={DateTimePickerStyle.label}>{label}</Text>
      <TouchableOpacity
        style={DateTimePickerStyle.button}
        onPress={switchVisibility}>
        <Text
          style={[
            {color: initialDate ? Colors.header : Colors.gray6},
            sg.fS16,
          ]}>
          {initialDate ? selectedDate : defaultDateToFormat}
        </Text>
        <Icon name="calendar-day" style={DateTimePickerStyle.icon} />
        <DateTimePickerModal
          value={initialDate}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={switchVisibility}
          minimumDate={minimumDate ? minimumDate : defaultMinimumDate}
          maximumDate={maximumDate ? maximumDate : defaultMaximumDate}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DateTimePicker;
