import React from 'react';
import {View} from 'react-native';
import {Text} from '../components/index';
import {Colors, sg} from '../styling';
import PropTypes from 'prop-types';

const UserCard = ({style, user, login, email, url}) => {
  return (
    <View
      style={[
        {
          backgroundColor: 'black',
          borderWidth: 2,
          width: '100%',
          height: 160,
          borderRadius: 14,
          borderColor: Colors.white,
        },
        style,
      ]}>
      <Text
        style={{marginVertical: 10, textAlign: 'center', color: Colors.white}}>
        Welcom, {user}
      </Text>
      <View style={{height: 1, borderWidth: 1, borderColor: Colors.white}} />
      <View style={{alignItems: 'flex-start', marginLeft: 10, marginTop: 10}}>
        <Text style={[sg.mV5, {color: Colors.white}]}>Email: {email}</Text>
        <Text style={[sg.mV5, {color: Colors.white}]}>Login: {login}</Text>
        <Text style={[sg.mV5, {color: Colors.white}]}>Url: {url}</Text>
      </View>
    </View>
  );
};

export default UserCard;

UserCard.defaultProps = {style: []};
UserCard.propsTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  user: PropTypes.string,
  email: PropTypes.string,
  login: PropTypes.string,
  url: PropTypes.string,
};
