import React from 'react';
import {Colors} from '../styling';
import {Text} from './index';
import {TouchableOpacity, Image} from 'react-native';

const CategoriesTab = ({title, image, onPress, style, imageStyle}) => {
  return (
    <TouchableOpacity
      style={[
        {
          borderColor: Colors.white,
          borderRadius: 7,
          height: 50,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
      activeOpacity={0.7}
      onPress={onPress}>
      {title && (
        <Text style={{color: Colors.white, textAlign: 'center'}}>{title}</Text>
      )}
      {image && (
        <Image
          source={image}
          style={[
            {
              width: 80,
              height: 50,
              borderRadius: 7,
              borderWidth: 2,
              borderColor: Colors.white,
            },
            imageStyle,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default CategoriesTab;
