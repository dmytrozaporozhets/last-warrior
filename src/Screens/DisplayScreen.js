import React, {useState} from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import {increment, decrement, asyncIncrement} from '../../Redux/Display/actions';
import { useSelector, useDispatch } from 'react-redux';
import {SafeAreaView} from "react-native-safe-area-context";

const firstFon = require('../../component/image/firstFon.jpg')
const secondFon = require('../../component/image/secondFon.jpg')

const setColor = (backgroundColor) => {
    return {
        backgroundColor
    }
}

const DisplayScreen = () =>  {

    const [theme, setTheme] = useState(true)

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(state);



    const addValue = () => {
        dispatch(increment())
    }

    const subValue = () => {
        dispatch(decrement())
    }

    const asyncValue = () => {
        dispatch(asyncIncrement())
    }

    return (
        <ImageBackground source={ theme ? firstFon : secondFon} style={styles.image} >
            <SafeAreaView style={styles.main}>
                <View style={styles.containerTheme}>
                    <TouchableOpacity
                        style={{...styles.buttonTheme,...setColor('pink')}}
                        activeOpacity={0.5}
                        onPress={()=>{
                            setTheme(!theme)
                        }}
                        disabled={state.block.disabled}
                    >
                        <Text style={styles.textButtonTheme}>
                            Сменить тему
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Welcome to my page
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textDisplay}>
                        Счётчик: {state.counter}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.button,...setColor('blue')}}
                                      onPress={addValue}
                                      disabled={state.block.disabled}>
                        <Text style={styles.textButton}>
                            Добавить
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button,...setColor('red')}}
                                      onPress={subValue}
                                      disabled={state.block.disabled}>
                        <Text style={styles.textButton}>
                            Убрать
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button,...setColor('green')}}
                                      onPress={asyncValue}
                                      >
                        <Text style={styles.textButton}>
                            Async
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        margin: 0,
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'aqua',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 40,
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7,
        width: 80,
        height: 40,
        margin: 10,
    },
    textButton: {
        textAlign:'center',
        fontSize: 20,
        marginTop: 5,
        color: 'white',
    },
    buttonTheme: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7,
        width: 120,
        height: 30,
        margin: 10,
    },
    textButtonTheme: {
        textAlign:'center',
        fontSize: 16,
        marginTop: 4,
        color: 'black',
    },
    containerTheme: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 10,
        flexDirection: 'row',
    },
    textDisplay: {
        textAlign:'center',
        fontSize: 25,
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',

    },
})

export default DisplayScreen;

