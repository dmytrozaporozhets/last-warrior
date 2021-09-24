import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '../redax/auth/actions';
import {Button, Input, ScreenView, Spinner, Text} from '../components/index';
import {AUTH, SIGN_UP} from '../navigation/constants';
import {Colors, sg} from '../styling';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SignInStyle} from '../styling/screens/SignIn';
import {loginWith} from '../constants';

const SignIn = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const onCreate = () => navigation.navigate(SIGN_UP);
  const onLoginWith = (account) => () => {
    switch (account) {
      case 'github': {
        return navigation.navigate(AUTH);
      }
      case 'google': {
        return null;
      }
      default:
        return;
    }
  };
  const dispatch = useDispatch();

  const ComeIn = () => {
    if (login === 'dz' && password === '12345') {
      setLoading(true);
      setTimeout(() => {
        dispatch(signIn());
        setLoading(false);
      }, 500);
    } else if (login === '' || password === '') {
      Alert.alert('Login and password cannot be empty');
    } else {
      Alert.alert('Login or password is incorrect');
    }
  };

  return (
    <ScreenView statusBarColor={Colors.black}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={SignInStyle.container}>
          <View style={SignInStyle.box}>
            <Icon name="pied-piper-alt" color={Colors.yellow} size={45} />
            <Text style={SignInStyle.header} bold>
              Last Warrior
            </Text>
          </View>
          <Input
            label="Login:"
            placeholder="Enter login..."
            onChange={setLogin}
            value={login}
            containerStyle={[sg.mV10, sg.width100p]}
          />
          <Input
            label="Password:"
            placeholder="Enter password..."
            onChange={setPassword}
            value={password}
            containerStyle={[sg.mV10, sg.width100p]}
            securedEntry
          />
          <Button title="Send" onPress={ComeIn} style={sg.mV15} />
          <TouchableOpacity
            style={[sg.aSEnd, sg.mR20]}
            activeOpacity={0.5}
            onPress={onCreate}>
            <Text style={{color: Colors.pink}}>Create a new account?</Text>
          </TouchableOpacity>
          <View style={[sg.aICenter, sg.width100p, sg.mT20]}>
            {loginWith.map((it) => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={SignInStyle.touchGitHub}
                onPress={onLoginWith(it.type)}
                key={it.id}>
                <Icon name={it.icon} color="white" size={25} style={sg.mH10} />
                <View style={SignInStyle.border} />
                <Text style={SignInStyle.textLoginWith} bold>
                  {it.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {loading && <Spinner visible />}
        </View>
      </TouchableWithoutFeedback>
    </ScreenView>
  );
};

export default SignIn;
