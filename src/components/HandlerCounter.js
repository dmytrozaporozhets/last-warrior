import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import {CounterStyle} from '../styling/components/Counter';
import Colors from '../styling/Colors';
import {sg} from '../styling';
import {Text} from './index';

const HandlerCounter = ({value, style, onSubtraction, onAddition}) => {
  return (
    <View style={[CounterStyle.container, style]}>
      <View style={[sg.row, sg.spaceBetween]}>
        <TouchableOpacity
          style={[
            CounterStyle.button,
            sg.mR10,
            {backgroundColor: value > 0 ? Colors.orange : '#d8d8d8'},
          ]}
          onPress={onSubtraction}>
          <Icon name="minus" size={16} color="white" />
        </TouchableOpacity>
        <View style={CounterStyle.box}>
          <Text style={[sg.fS32]} bold>
            {value}
          </Text>
        </View>
        <TouchableOpacity
          style={[CounterStyle.button, {backgroundColor: Colors.blue3}]}
          onPress={onAddition}>
          <Icon name="plus" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

HandlerCounter.defaultProps = {
  style: [],
  value: 0,
  onSubtraction: () => null,
  onAddition: () => null,
};

HandlerCounter.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  value: PropTypes.number,
  onSubtraction: PropTypes.any,
  onAddition: PropTypes.any,
};

export default HandlerCounter;
