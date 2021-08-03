import React from 'react';
import {Text} from './index';
import {View, Image} from 'react-native';
import {Colors} from '../styling';

const PhotosCard = ({title, url, id}) => {
  return (
    <View
      style={{
        flex: 1,
        height: 120,
        width: '100%',
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 14,
        borderColor: Colors.green,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
      }}
      key={id}>
      <Image
        source={{
          uri: url,
        }}
        style={{width: 100, height: 100, borderRadius: 7}}
      />
      <View
        style={{
          marginRight: 10,
          width: '60%',
          marginTop: 20,
        }}>
        <Text bold>{title}</Text>
      </View>
    </View>
  );
};

export default PhotosCard;
