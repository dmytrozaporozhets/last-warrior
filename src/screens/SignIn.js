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
            <Text style={SignInStyle.header} bold>
              Magic shine
            </Text>
            <Icon name="fire" color="yellow" size={30} />
          </View>
          <Text style={{color: Colors.white}}>Войдите с помощью GitHub</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={SignInStyle.touchGitHub}
            onPress={GitHub}>
            <Text style={SignInStyle.textGitHub}> GitHub </Text>
            <Icon name="github" color="white" size={30} />
          </TouchableOpacity>
          <Input
            label="Введите логин:"
            placeholder="Введите логин..."
            onChange={setLogin}
            value={login}
            containerStyle={sg.mV10}
            dark
          />
          <Input
            label="Введите пароль:"
            placeholder="Введите пароль..."
            onChange={setPassword}
            value={password}
            containerStyle={sg.mV10}
            dark
          />
          <Button title="Отправить" onPress={ComeIn} style={sg.mV15} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
