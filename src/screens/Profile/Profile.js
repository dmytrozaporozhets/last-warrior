import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ProfileScreenStyle} from '../../styling/screens/ProfileScreen';
import {useDispatch, useSelector} from 'react-redux';
import {
  ButtonWithIcon,
  Header,
  ScreenView,
  Text,
  StatisticButton,
} from '../../components';
import {Colors, sg} from '../../styling';
import {userDataResponse} from '../../redax/auth/actions';
import {fetchGitHub} from '../../utils/fetch';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {EDIT_PROFILE} from '../../navigation/constants';
import {statisticCategories} from '../../constants';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  useEffect(() => {
    fetchGitHub(token)
      .then((resp) => {
        dispatch(userDataResponse(resp.data));
        console.log(resp.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const goTo = (route) => () => navigation.navigate(route);
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header logo onSettings />
      <View style={sg.flex}>
        <View style={ProfileScreenStyle.box}>
          <View style={[sg.absolute, sg.right0, sg.mT10]}>
            <Text style={ProfileScreenStyle.login}>{user?.login}</Text>
            <ButtonWithIcon
              text="Online"
              icon="mobile-alt"
              color={Colors.gray4}
              containerStyle={sg.mT5}
              textStyle={[sg.fS14]}
              disabled={true}
            />
            <TouchableOpacity>
              <Text style={[sg.fS14, sg.mT5, {color: Colors.blue2}]}>
                Set status
              </Text>
            </TouchableOpacity>
          </View>
          <View style={sg.aICenter}>
            <View style={ProfileScreenStyle.imageContainer}>
              <Icon name="user-tie" size={60} color={Colors.black} />
            </View>
            <ButtonWithIcon
              text="Change photo"
              icon="camera"
              color={Colors.blue2}
              containerStyle={sg.mT5}
              textStyle={[sg.fS14]}
            />
          </View>
        </View>
        <View style={[sg.mH30]}>
          <ButtonWithIcon
            text="Edit profile"
            icon="edit"
            color={Colors.white}
            containerStyle={[sg.mT5, sg.aSCenter]}
            onPress={goTo(EDIT_PROFILE)}
            container
          />
          <View style={[sg.row, sg.jCSpaceBetween]}>
            {statisticCategories.map((it) => (
              <View key={it.id}>
                <StatisticButton
                  category={it.category}
                  quantity={it.quantity}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default Profile;
