import React from 'react';
import {Text, Autocomplete} from './index';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sg} from '../styling';
import {isIos} from '../utils';
import {InputAutocompleteStyle} from '../styling/components/InputAutocomplete';
import PropTypes from 'prop-types';

const InputAutocomplete = (props) => {
  const {
    data,
    defaultValue,
    onChange,
    onSelectItem,
    componentStyle,
    listContainerStyle,
    listStyle,
    placeholder,
    hideResults,
    onResponderCapture,
    onFocus,
    onEndEditing,
  } = props;

  return (
    <View
      style={[
        !isIos ? InputAutocompleteStyle.android : InputAutocompleteStyle.ios,
        componentStyle,
      ]}>
      <Autocomplete
        {...props}
        data={data}
        defaultValue={defaultValue}
        hideResults={hideResults}
        onChangeText={(text) => onChange(text)}
        onFocus={onFocus}
        onEndEditing={onEndEditing}
        placeholder={placeholder}
        listContainerStyle={[listContainerStyle, sg.flex]}
        inputContainerStyle={sg.noBorder}
        flatListProps={{
          style: [InputAutocompleteStyle.list, listStyle],
          onStartShouldSetResponderCapture: onResponderCapture,
          nestedScrollEnabled: true,
          keyExtractor: (_, idx) => idx,
          renderItem: ({item}) => (
            <TouchableOpacity
              onPress={() => onSelectItem(item)}
              style={InputAutocompleteStyle.btn}>
              <Text style={sg.fS14} bold>
                {item.name}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </View>
  );
};

InputAutocomplete.defaultProps = {
  hideResults: false,
  componentStyle: [],
  listContainerStyle: [],
  listStyle: [],
  onChange: () => null,
  onSelectItem: () => null,
  onResponderCapture: () => null,
  onFocus: () => null,
  onEndEditing: () => null,
};

InputAutocomplete.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array,
  onSelectItem: PropTypes.func,
  onResponderCapture: PropTypes.func,
  onFocus: PropTypes.func,
  onEndEditing: PropTypes.func,
  placeholder: PropTypes.string,
  hideResults: PropTypes.bool,
  componentStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  listContainerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  listStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default InputAutocomplete;
