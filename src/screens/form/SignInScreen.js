import React, {useEffect} from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput} from 'react-native';
import TodoList from '../../components/TodoList';

const image = {
  uri:
    'https://cdn.pixabay.com/photo/2020/10/13/05/31/sunset-5650773_960_720.jpg',
};

const SignInScreen = ({navigation}) => {
  const [todos, setTodos] = useEffect([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: false},
  ]);

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.text}>Добро пожаловать!</Text>
        </View>
        <View>
          <TextInput type="text" />
        </View>

        <TodoList todos={todos} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: 0,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
