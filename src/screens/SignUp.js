import React from 'react';
import {ScrollView, View, KeyboardAvoidingView} from 'react-native';
import {ScreenView, Text, Header, Input, DropDown, Button} from '../components';
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
            <Input label="Login*" light />
            <Input label="Name*" light />
            <Input label="Surname*" light />
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
                <DropDown items={[{label: '', value: ''}]} placeholder="Day" />
                <DropDown
                  items={[{label: '', value: ''}]}
                  containerStyle={[sg.mH5]}
                  placeholder="Month"
                />
                <DropDown items={[{label: '', value: ''}]} placeholder="Year" />
              </View>
            </View>
            <View>
              <Text
                style={{color: Colors.white, fontSize: 14, marginVertical: 10}}>
                Gender*
              </Text>
              <DropDown items={Genders} placeholder="Gender" />
            </View>
            <Input label="Password*" light />
            <Input label="Re-enter password*" light />
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
