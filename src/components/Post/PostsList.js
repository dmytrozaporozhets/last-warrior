import React from 'react';
import {Button, Post, Text} from '../index';
import {View} from 'react-native';
import {sg} from '../../styling';
import {PostListStyle} from '../../styling/components/Post/PostList';

const PostsList = ({item, title, text, async, onPress, warning, onRemove}) => {
  return (
    <View style={[sg.flex, sg.mT30]}>
      <Text style={PostListStyle.title} bold>
        {title}
      </Text>
      <>
        {item.length !== 0 ? (
          <>
            <Button
              title="Reset"
              size="small"
              btnType="red"
              style={[sg.aSCenter, sg.mB10]}
              onPress={onRemove}
            />
            <View>
              <Text style={PostListStyle.text}>
                {text}: {item.length}
              </Text>
            </View>
            {item.map((it) => (
              <View style={PostListStyle.box} key={it.id}>
                <Post {...it} />
              </View>
            ))}
          </>
        ) : (
          <>
            <Text style={PostListStyle.textEmpty} bold>
              {warning}
            </Text>
            {async && (
              <Button
                title="Download"
                size="small"
                btnType="red"
                style={sg.aSCenter}
                onPress={onPress}
              />
            )}
          </>
        )}
      </>
    </View>
  );
};

export default PostsList;
