import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Text} from './index';

const ItemList = ({getItems, style}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
    console.log('render');
  }, [getItems]);

  return (
    <View style={style}>
      {items.map((i) => (
        <Text key={i}>{i}</Text>
      ))}
    </View>
  );
};

export default ItemList;
