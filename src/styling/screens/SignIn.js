import {StyleSheet} from 'react-native';
import {Colors} from '../index';

export const SignInStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginTop: 50,
  },
  box: {
    alignItems: 'center',
    marginTop: 50,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    width: 110,
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: 10,
  },
});
