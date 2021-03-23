import React from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import {darkSky} from '../../../../assets/link/image';
import {Colors, sg} from '../../../styling';
import {DisplayScreenStyle} from '../../../styling/screens/DisplayScreen';
import {ScreenView, PostsList, PostForm, Spinner} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {onCreateFetchPost} from '../../../redax/posts';

const Posts = () => {
  const dispatch = useDispatch();
  const syncPosts = useSelector((state) => state.post.posts);
  const asyncPosts = useSelector((state) => state.post.fetchPosts);
  const loading = useSelector((state) => state.post.isLoading);
  const onDownload = () => dispatch(onCreateFetchPost());
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground source={darkSky} style={DisplayScreenStyle.image}>
        <ScrollView>
          <View style={sg.flex}>
            <PostForm
              inputStyle={[sg.height60, sg.m0]}
              buttonStyle={[sg.mT25, sg.width80]}
              placeholder="Add post..."
              titleBtn="Add"
            />
            <PostsList
              item={syncPosts}
              title="Synchronous posts"
              text="Number of posts"
              warning="No posts yet"
            />
            <PostsList
              item={asyncPosts}
              title="Asynchronous posts"
              text="Number of async posts"
              onPress={onDownload}
              warning="No async posts yet"
              async
            />
          </View>
        </ScrollView>
        {loading && <Spinner visible />}
      </ImageBackground>
    </ScreenView>
  );
};

export default Posts;
