import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const image = {
  uri:
    'https://cdn.pixabay.com/photo/2020/10/22/19/26/rocks-5676982_960_720.jpg',
};

const ProfileScreen = ({navigation}) => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.main}>
        <Text style={styles.text}> Welcome, Bro! </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            style={styles.button}>
            <View>
              <Text style={styles.textButton}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  component: {flex: 1, paddingTop: 50},
  container: {paddingHorizontal: 30, paddingVertical: 20},
  image: {flex: 1, resizeMode: 'cover', justifyContent: 'center', margin: -10},
  text: {textAlign: 'center', fontSize: 20, fontWeight: 'bold'},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    width: 75,
    height: 40,
    marginTop: 10,
    marginHorizontal: 13,
    backgroundColor: 'sandybrown',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
