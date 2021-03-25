import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Input} from '../index';
import {sg} from '../../styling';
import {useDispatch} from 'react-redux';
import {onCreatePost} from '../../redax/posts';

const PostForm = ({inputStyle, buttonStyle, placeholder, titleBtn}) => {
  const [value, setValue] = useState('');
  const [post, setPost] = useState('');
  // const alert = useSelector((state) => state.interface.alert);
  // console.log(alert);

  const dispatch = useDispatch();

  const newPost = {
    id: Date.now().toString(),
    title: value,
  };

  const postList = () => {
    setPost((prev) => [...prev, newPost]);
  };

  const onSubmit = () => {
    if (value.trim()) {
      dispatch(onCreatePost(post));
      postList();
      setValue('');
    } else {
      // dispatch(showAlert(alert));
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
      {/*{alert && <Alert text="Field cannot be empty" />}*/}
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
