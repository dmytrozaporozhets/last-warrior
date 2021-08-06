import React from 'react';
import {View} from 'react-native';
import {Text} from '../components';

const ItemPicker = ({
  label,
  style,
  itemColor,
  defaultItemColor,
  fontSize,
  fontFamily,
}) => {
  return (
    <View style={style}>
      <Text
        style={{
          fontSize: fontSize,
          color: itemColor ? itemColor : defaultItemColor,
          fontFamily: fontFamily,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default ItemPicker;
