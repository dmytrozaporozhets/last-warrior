import React from 'react';
import {Text} from '../index';
import {TouchableOpacity} from 'react-native';
import {Colors} from '../../styling';

const Post = ({title, id}) => {
  return (
    <TouchableOpacity
      key={id}
      activeOpacity={0.5}
      style={{
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        paddingHorizontal: 15,
      }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Post;
