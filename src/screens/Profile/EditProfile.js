import React from 'react';
import {ScrollView, View} from 'react-native';
import {Colors} from '../../styling';
import {Header, ScreenView, Text} from '../../components';

const EditProfile = ({navigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header title="Edit Profile" onBack={goBack} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={{color: Colors.white, fontSize: 24}} bold>
            Edit Profile
          </Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default EditProfile;
