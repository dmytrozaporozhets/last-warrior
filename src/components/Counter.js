import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styleGlobal from '../styling/styleGlobal';
import PropTypes from 'prop-types';
import {CounterStyle} from '../styling/components/Counter';
import Colors from '../styling/Colors';

const Counter = ({item, value, style, onSubtraction, onAddition}) => {
  const {title, price} = item;
  return (
    <View style={[CounterStyle.container, style]}>
      <View style={styleGlobal.jCStart}>
        <Text style={CounterStyle.text} bold>
          {title}
        </Text>
        <Text style={CounterStyle.text}>{`£${price}.00`}</Text>
      </View>
      <View style={[styleGlobal.row]}>
        <TouchableOpacity
          style={[
            CounterStyle.button,
            styleGlobal.mR10,
            {backgroundColor: value > 0 ? Colors.header : '#d8d8d8'},
          ]}
          onPress={onSubtraction}>
          <Icon name="minus" size={16} color="white" />
        </TouchableOpacity>
        <View style={CounterStyle.box}>
          <Text style={[styleGlobal.fS16]}>{value}</Text>
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

Counter.defaultProps = {
  style: [],
  value: 0,
  onSubtraction: () => null,
  onAddition: () => null,
};

Counter.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  // title: PropTypes.string,
  value: PropTypes.number,
  // price: PropTypes.number,
  onSubtraction: PropTypes.any,
  onAddition: PropTypes.any,
};

export default Counter;
