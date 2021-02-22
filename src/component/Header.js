import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Training = (props) => {
  const [wishTraining, setWishTraining] = useState(true);

  return (
    <View style={style.header}>
      <Text style={style.text}>
        Чeм сегодня будет заниматься {props.name}?{' '}
        {wishTraining ? '\nУедет домой?' : '\nПоедет на тренировку!'}
      </Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          setWishTraining(false);
        }}
        color={wishTraining ? 'red' : 'green'}
        disabled={!wishTraining}>
        <Text style={style.text}>{wishTraining ? 'Слабак!' : 'Лучший!'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Player = () => {
  return <Training name="Алексей" />;
};

const style = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 100,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 13,
    padding: 3,
    backgroundColor: 'pink',
    marginTop: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Player;
