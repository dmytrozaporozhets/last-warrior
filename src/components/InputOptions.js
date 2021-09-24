import React, {useState} from 'react';
import {sg} from '../styling';
import {DateTimePicker, Input, Picker} from './index';
import {View} from 'react-native';
import {formatDataForPicker} from '../utils';

const InputOptions = ({
  type,
  label,
  onChange,
  is_required,
  style,
  val,
  options,
}) => {
  const [value, setValue] = useState(val || '');
  const arrOptions = type === 'select' && formatDataForPicker(options);

  const onSelect = (item) => {
    setValue(item);
    switch (type) {
      case 'select':
        onChange(arrOptions.find((it) => it.label === item)?.id);
        break;
      default:
        onChange(item);
    }
  };

  const renderInput = () => {
    switch (type) {
      case 'date':
        return (
          <DateTimePicker
            label={`${label} ${is_required ? '*' : ''}`}
            initialDate={value}
            onConfirm={onSelect}
            style={sg.mT15}
            placeholder="dd/mm/yyyy"
          />
        );
      case 'select':
        return (
          <Picker
            label={`${label} ${is_required ? '*' : ''}`}
            items={arrOptions}
            initialValue={arrOptions.find((it) => it.id === value)}
            onSelect={onSelect}
            placeholder={{label: 'Select...', value: 'Select...'}}
            labelStyle={sg.mT15}
          />
        );
      default:
        return (
          <Input
            value={value}
            label={`${label} ${is_required ? '*' : ''}`}
            autoCapitalize="none"
            onChange={onSelect}
            containerStyle={sg.mT15}
          />
        );
    }
  };

  return <View style={[style]}>{renderInput()}</View>;
};

export default InputOptions;
