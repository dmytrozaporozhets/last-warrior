import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native-gesture-handler';
import {Text, View, ViewPropTypes} from 'react-native';
import {AutocompleteStyle} from '../styling/components/Autocomplete';
import {Input} from '../components';

export const Autocomplete = (props) => {
  function renderResultList(data, listProps) {
    const {style, ...flatListProps} = listProps;

    return (
      <FlatList
        data={data}
        style={[AutocompleteStyle.list, style]}
        {...flatListProps}
      />
    );
  }

  function renderTextInput() {
    const {renderTextInput: renderFunction, style} = props;
    const textProps = {
      style: [AutocompleteStyle.input, style],
      ...props,
    };

    return renderFunction(textProps);
  }

  const {
    data,
    containerStyle,
    hideResults,
    inputContainerStyle,
    listContainerStyle,
    onShowResults,
    onStartShouldSetResponderCapture,
    flatListProps,
  } = props;

  const showResults = data.length > 0;
  // Notify listener if the suggestion will be shown.
  onShowResults && onShowResults(showResults);
  return (
    <View style={[AutocompleteStyle.container, containerStyle]}>
      <View style={[AutocompleteStyle.inputContainer, inputContainerStyle]}>
        {renderTextInput(props)}
      </View>
      {!hideResults && (
        <View
          style={listContainerStyle}
          onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}>
          {showResults && renderResultList(data, flatListProps)}
        </View>
      )}
    </View>
  );
};

Autocomplete.propTypes = {
  ...Input.propTypes,
  containerStyle: ViewPropTypes ? ViewPropTypes.style : PropTypes.object,
  data: PropTypes.array,
  flatListProps: FlatList.propTypes || PropTypes.object,
  hideResults: PropTypes.bool,
  inputContainerStyle: ViewPropTypes ? ViewPropTypes.style : PropTypes.object,
  listContainerStyle: ViewPropTypes ? ViewPropTypes.style : PropTypes.object,
  onShowResults: PropTypes.func,
  onStartShouldSetResponderCapture: PropTypes.func,
  renderTextInput: PropTypes.func,
};

const defaultKeyExtractor = (_, index) => `key-${index}`;
const defaultRenderItem = ({item}) => <Text>{item}</Text>;

Autocomplete.defaultProps = {
  data: [],
  onStartShouldSetResponderCapture: () => false,
  renderTextInput: (props) => <Input {...props} />,
  flatListProps: {
    renderItem: defaultRenderItem,
    keyExtractor: defaultKeyExtractor,
  },
};

export default Autocomplete;
