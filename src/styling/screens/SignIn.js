import {StyleSheet} from 'react-native';
import {Colors, sg} from '../index';

export const SignInStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  box: {
    alignItems: 'center',
    marginVertical: 50,
  },
  header: {
    fontSize: 18,
    color: Colors.yellow,
    textAlign: 'center',
    marginTop: 10,
  },
  textInput: {
    fontSize: 20,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: -10,
    paddingBottom: 340,
  },
  touchGitHub: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: 10,
    borderColor: Colors.pink,
  },
  textLoginWith: {...sg.fS16, ...sg.mR5, ...sg.mL20, color: Colors.white},
  border: {
    borderColor: Colors.pink,
    height: 40,
    width: 1,
    borderWidth: 1,
  },
});
