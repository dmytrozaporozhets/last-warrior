import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Input} from '../index';
import {sg} from '../../styling';
import {useDispatch} from 'react-redux';
import {onCreatePost} from '../../redax/posts';

const PostForm = ({inputStyle, buttonStyle, placeholder, titleBtn}) => {
  const [value, setValue] = useState('');
  const [post, setPost] = useState('');

  const dispatch = useDispatch();

  const newPost = (title) => {
    setPost((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const onSubmit = () => {
    if (value.trim()) {
      newPost(value);
      setValue('');
      dispatch(onCreatePost(post));
    } else {
      Alert.alert('Field cannot be empty');
    }
  };

  return (
    <View style={styles.block}>
      <Input
        onChange={setValue}
        value={value}
        placeholder={placeholder}
        containerStyle={[sg.width200, inputStyle]}
      />
      <Button
        title={titleBtn}
        size="small"
        btnType="green"
        onPress={onSubmit}
        style={[sg.mL10, sg.mT25, buttonStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default PostForm;
