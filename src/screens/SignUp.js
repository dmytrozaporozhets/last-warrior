import React from 'react';
import {ScrollView, View, KeyboardAvoidingView} from 'react-native';
import {ScreenView, Text, Header, Input, Button, Picker} from '../components';
import {Colors, sg} from '../styling';
import {Genders} from '../constants';
import {SignUpStyle} from '../styling/screens/SIgnUp';
import {isIos} from '../utils';

const SignUp = ({navigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header onBack={goBack} />
      <KeyboardAvoidingView
        style={sg.flex}
        behavior={isIos ? 'padding' : 'height'}>
        <ScrollView>
          <View style={SignUpStyle.container}>
            <View style={[sg.mB10, sg.mT10]}>
              <Text style={SignUpStyle.header} bold>
                Sign Up
              </Text>
              <Text style={{color: Colors.yellow, fontSize: 14}}>
                It's quick and easy.
              </Text>
            </View>
            <Input label="Login*" dark />
            <Input label="Name*" dark containerStyle={[sg.mV10]} />
            <Input label="Surname*" dark />
            <View>
              <Text
                style={{color: Colors.white, fontSize: 14, marginVertical: 10}}>
                Date of birth*
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}>
                <Picker
                  items={[{label: '', value: ''}]}
                  placeholder={{label: 'Day', value: 'Day'}}
                  dark
                />
                <Picker
                  items={[{label: '', value: ''}]}
                  placeholder={{label: 'Month', value: 'Month'}}
                  containerStyle={[sg.mH5]}
                  dark
                />
                <Picker
                  placeholder={{label: 'Year', value: 'Year'}}
                  items={[{label: '', value: ''}]}
                  dark
                />
              </View>
            </View>
            <View>
              <Text
                style={{color: Colors.white, fontSize: 14, marginVertical: 10}}>
                Gender*
              </Text>
              <Picker
                items={Genders}
                placeholder={[{label: 'Gender', value: 'Gender'}]}
                dark
              />
            </View>
            <Input label="Password*" containerStyle={[sg.mT10]} dark />
            <Input label="Re-enter password*" containerStyle={[sg.mT10]} dark />
            <Text
              style={{color: Colors.yellow, fontSize: 12, marginVertical: 10}}>
              By clicking Sign Up, you agree to our{' '}
              <Text hyperlinksColor>Terms</Text>,{' '}
              <Text hyperlinksColor>Data Policy</Text> and{' '}
              <Text hyperlinksColor>Cookie Policy</Text>.
            </Text>
            <Button title="Sign Up" btnType="green" style={sg.mV15} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenView>
  );
};
export default SignUp;
