import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  changeColorFon,
  changeColorText,
  changeTheme,
  changeWindows,
  onReset,
} from '../redax/About/actionsAbout';
import {SafeAreaView} from 'react-native-safe-area-context';

const image = {
  uri:
    'https://cdn.pixabay.com/photo/2020/10/20/14/49/bridge-5670640_960_720.jpg',
};

const setColor = (backgroundColor) => {
  return {
    backgroundColor,
  };
};

const AboutScreen = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(state.token.token)

  const ChangeColorFon = (backgroundColor) => () => {
    dispatch(changeColorFon(backgroundColor));
  };

  const ChangeColorText = (color) => () => {
    dispatch(changeColorText(color));
  };

  const ChangeTheme = () => {
    dispatch(changeTheme());
  };

  const ChangeWindows = () => {
    dispatch(changeWindows());
  };

  const OnReset = () => {
    dispatch(onReset());
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={{...styles.main, ...state.theme.theme}}>
        <View style={styles.containerThemeAbout}>
          <TouchableOpacity
            style={styles.buttonThemeAbout}
            activeOpacity={0.5}
            onPress={OnReset}>
            <Text style={styles.textButtonTheme}>RESET</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonThemeAbout}
            activeOpacity={0.5}
            onPress={ChangeWindows}>
            <Text style={styles.textButtonTheme}>WINDOWS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonThemeAbout}
            activeOpacity={0.5}
            onPress={ChangeTheme}>
            <Text style={styles.textButtonTheme}>THEME</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.containerTextAbout,
            ...state.background.backgroundColor,
          }}>
          <View
            style={{...styles.containerTextFonAbout, ...state.windows.windows}}>
            <Text style={{...styles.textFon, ...state.text.color}}>
              Hello, word!
            </Text>
          </View>
          <View
            style={{...styles.containerTextFonAbout, ...state.windows.windows}}>
            <Text style={{...styles.textFon, ...state.text.color}}>
              Hello, friend!
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainerAllAbout}>
          <View style={styles.buttonContainerAbout}>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('blue')}}
              onPress={ChangeColorText('blue')}
              onLongPress={ChangeColorFon('blue')}>
              <Text style={styles.textButton}>Blue</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('red')}}
              onPress={ChangeColorText('red')}
              onLongPress={ChangeColorFon('red')}>
              <Text style={styles.textButton}>Red</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('green')}}
              onPress={ChangeColorText('green')}
              onLongPress={ChangeColorFon('green')}>
              <Text style={styles.textButton}>Green</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('white')}}
              onPress={ChangeColorText('white')}
              onLongPress={ChangeColorFon('white')}>
              <Text style={styles.textButton}>White</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainerAbout}>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('fuchsia')}}
              onPress={ChangeColorText('fuchsia')}
              onLongPress={ChangeColorFon('fuchsia')}>
              <Text style={styles.textButton}>Fuchsia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('yellow')}}
              onPress={ChangeColorText('yellow')}
              onLongPress={ChangeColorFon('yellow')}>
              <Text style={styles.textButton}>Yellow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('lime')}}
              onPress={ChangeColorText('lime')}
              onLongPress={ChangeColorFon('lime')}>
              <Text style={styles.textButton}>Lime</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('pink')}}
              onPress={ChangeColorText('pink')}
              onLongPress={ChangeColorFon('pink')}>
              <Text style={styles.textButton}>Pink</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainerAbout}>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('olive')}}
              onPress={ChangeColorText('olive')}
              onLongPress={ChangeColorFon('olive')}>
              <Text style={styles.textButton}>Olive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('grey')}}
              onPress={ChangeColorText('grey')}
              onLongPress={ChangeColorFon('grey')}>
              <Text style={styles.textButton}>Grey</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('aqua')}}
              onPress={ChangeColorText('aqua')}
              onLongPress={ChangeColorFon('aqua')}>
              <Text style={styles.textButton}>Aqua</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('purple')}}
              onPress={ChangeColorText('purple')}
              onLongPress={ChangeColorFon('purple')}>
              <Text style={styles.textButton}>Purple</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainerAbout}>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('teal')}}
              onPress={ChangeColorText('teal')}
              onLongPress={ChangeColorFon('teal')}>
              <Text style={styles.textButton}>Teal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('maroon')}}
              onPress={ChangeColorText('maroon')}
              onLongPress={ChangeColorFon('maroon')}>
              <Text style={styles.textButton}>Maroon</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('orange')}}
              onPress={ChangeColorText('orange')}
              onLongPress={ChangeColorFon('orange')}>
              <Text style={styles.textButton}>Orange</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonAbout, ...setColor('silver')}}
              onPress={ChangeColorText('silver')}
              onLongPress={ChangeColorFon('silver')}>
              <Text style={styles.textButton}>Silver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  home: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: -10,
  },
  textFon: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'orange',
    marginTop: 60,
  },
  containerTextAbout: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    height: 470,
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  containerTextFonAbout: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    borderRadius: 6,
    width: 350,
    height: 160,
    backgroundColor: 'white',
  },
  buttonContainerAllAbout: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonContainerAbout: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonAbout: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 7,
    width: 80,
    height: 20,
    margin: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonThemeAbout: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    width: 120,
    height: 30,
    marginTop: 10,
    backgroundColor: 'bisque',
    marginHorizontal: 5,
  },
  textButtonTheme: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 4,
    color: 'black',
  },
  containerThemeAbout: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  textDisplay: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default AboutScreen;
