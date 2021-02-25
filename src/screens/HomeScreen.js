import React, {useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {
  ABOUT_SCREEN,
  DISPLAY_SCREEN,
  INFO_SCREEN,
  PROFILE_SCREEN,
} from './index';
import styleGlobal from '../styling/styleGlobal';
import {HomeScreenStyle} from '../styling/HomeScreen';
import {Text} from '../components/Text';
import {menu} from '../constants';
import {Button} from '../components/Button';

const fon = require('../../assets/images/image2.jpg');
const requestUserUrl = 'https://api.github.com/user';

const HomeScreen = ({navigation}) => {
  const [user, setUser] = useState(null);

  const userData = (user) => {
    setUser(user);
  };
  console.log(user);

  const token = useSelector((state) => state.token.token);
  // const user = useSelector(state => state.token.user);
  // const dispatch = useDispatch();

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

  return (
    <ImageBackground source={fon} style={HomeScreenStyle.image}>
      <SafeAreaView style={styleGlobal.flex}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            title="Profile"
            onPress={() => navigation.navigate(PROFILE_SCREEN)}

          />
          <Button
            title="Display"
            onPress={() => navigation.navigate(DISPLAY_SCREEN)}
          />
          <Button
            title="About"
            onPress={() => navigation.navigate(ABOUT_SCREEN)}
          />
          <Button
            title="Info"
            onPress={() => navigation.navigate(INFO_SCREEN)}
          />
        </View>

        <View style={HomeScreenStyle.home}>
          <Text style={HomeScreenStyle.text}>
            {`Welcome, ${user?.name}!
                                \nemail: ${user?.email}
                                \nlogin: ${user?.login}
                                \nurl: ${user?.url}`}
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
