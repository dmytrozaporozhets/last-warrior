import React, {useState} from 'react';
import {View, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '../redax/auth/actions';
import {Button, Input, Spinner, Text} from '../components/index';
import {AUTH} from './constants';
import {sign} from '../../assets/link/image';
import {Colors, sg} from '../styling';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SignInStyle} from '../styling/screens/SignIn';

const SignIn = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Spinner visible />;
  }

  const dispatch = useDispatch();

  const ComeIn = () => {
    if (login === 'dimka' && password === '12345') {
      setLoading(true);
      setTimeout(() => {
        dispatch(signIn());
        setLoading(false);
      }, 500);
    } else if (login === '' || password === '') {
      Alert.alert('Логин и пароль не могут быть пустыми');
    } else {
      Alert.alert('Не верно указан логин или пароль');
    }
  };

  const GitHub = () => navigation.navigate(AUTH);

  return (
    <View style={sg.flex}>
      <ImageBackground source={sign} style={SignInStyle.image}>
        <View style={SignInStyle.container}>
          <View style={SignInStyle.box}>
            <Icon name="pied-piper-alt" color="yellow" size={45} />
            <Text style={SignInStyle.header} bold>
              Last Warrior
            </Text>
          </View>
          <View style={[sg.aICenter, sg.mT60]}>
            <Text style={{color: Colors.white}}>Login with:</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={SignInStyle.touchGitHub}
              onPress={GitHub}>
              <Text style={[sg.fS16, sg.mR5]} bold>
                GitHub
              </Text>
              <Icon name="github" color="white" size={30} />
            </TouchableOpacity>
          </View>
          <Input
            label="Login:"
            placeholder="Enter login..."
            onChange={setLogin}
            value={login}
            containerStyle={sg.mV10}
            light
          />
          <Input
            label="Password:"
            placeholder="Enter password..."
            onChange={setPassword}
            value={password}
            containerStyle={sg.mV10}
            securedEntry
            light
          />
          <Button title="Send" onPress={ComeIn} style={sg.mV15} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
