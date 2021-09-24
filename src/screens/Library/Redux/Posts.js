import React from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import {darkSky} from '../../../../assets/images/imageLink';
import {Colors, sg} from '../../../styling';
import {DisplayScreenStyle} from '../../../styling/screens/DisplayScreen';
import {
  ScreenView,
  PostsList,
  PostForm,
  Spinner,
  Header,
} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  onCreateFetchPost,
  onResetFetchPost,
  onResetPost,
} from '../../../redax/posts';

const Posts = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const dispatch = useDispatch();
  const syncPosts = useSelector((state) => state.post.posts);
  const asyncPosts = useSelector((state) => state.post.fetchPosts);
  const loading = useSelector((state) => state.post.isLoading);
  const onDownload = () => dispatch(onCreateFetchPost());
  const onRemoveFetchPost = () => dispatch(onResetFetchPost());
  const onRemovePost = () => dispatch(onResetPost());
  console.log(syncPosts);
  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground source={darkSky} style={DisplayScreenStyle.image}>
        <Header onBack={goBack} />
        <ScrollView keyboardShouldPersistTaps="handled">
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
              onRemove={onRemovePost}
            />
            <PostsList
              item={asyncPosts}
              title="Asynchronous posts"
              text="Number of async posts"
              onPress={onDownload}
              onRemove={onRemoveFetchPost}
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
