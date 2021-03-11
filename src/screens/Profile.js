import React, {useState, useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileScreenStyle} from '../styling/screens/PtofileScreen';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {profileScreen} from '../../assets/link/image';
import {UserCard} from '../components/index';
import {sg} from '../styling';

const requestUserUrl = 'https://api.github.com/user';

const Profile = ({navigation}) => {
  const [user, setUser] = useState(null);
  const goTo = (route) => () => navigation.navigate(route);
  const userInfo = useSelector((state) => state.token.user);

  const userData = (user) => {
    setUser(user);
  };
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
        // dispatch(userDataResponse(response.data))
        userData(response.data);
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  }, []);

  const token = useSelector((state) => state.token.token);
  return (
    <ImageBackground source={profileScreen} style={sg.flex}>
      <SafeAreaView style={sg.flex}>
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
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;
