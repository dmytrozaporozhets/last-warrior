import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ProfileScreenStyle} from '../styling/screens/PtofileScreen';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {Header, ScreenView, UserCard} from '../components/index';
import {Colors, sg} from '../styling';
import {userDataResponse} from '../redax/auth/actions';
import {requestUserUrl} from '../../assets/link/request';

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  useEffect(() => {
    axios
      .get(requestUserUrl, {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/json',
        },
      })
      .then((response) => {
        dispatch(userDataResponse(response.data));
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header logo onSettings />
      <View style={ProfileScreenStyle.home}>
        {user ? (
          <UserCard
            user={user?.name}
            email={user?.email}
            login={user?.login}
            url={user?.url}
            style={[sg.mV10, sg.mT20]}
          />
        ) : null}
      </View>
    </ScreenView>
  );
};

export default Profile;
