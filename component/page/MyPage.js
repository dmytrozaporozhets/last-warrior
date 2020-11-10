import React, {useState} from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import createStore from '../reduxComponent/createStore';
import rootReducer from "../reduxComponent/rootReducer";

const store = createStore(rootReducer)





const firstFon = require('../image/firstFon.jpg')
const secondFon = require('../image/secondFon.jpg')

const setColor = (backgroundColor) => {
    return {
        backgroundColor
    }
}

const MyPage = () =>  {

    const [counter, setCounter] = useState(0)
    const [theme, setTheme] = useState(true)
    const [disabled,setDisabled] = useState(false)

    const addValue = () => {
        setCounter(counter + 1)
    }

    const subValue = () => {
        setCounter(counter - 1)
    }

    const asyncValue = () => {
        setTimeout(() => {
            setCounter(counter+1)
        },2000)
    }

    return (
        <ImageBackground source={ theme ? firstFon : secondFon} style={styles.image} >
            <View style={styles.main}>
                <View style={styles.containerTheme}>
                    <TouchableOpacity
                        style={{...styles.buttonTheme,...setColor('pink')}}
                        activeOpacity={0.5}
                        onPress={()=>{
                            setTheme(!theme)
                        }}
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
                        Счётчик: {counter}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.button,...setColor('blue')}}
                                      onPress={addValue}>
                        <Text style={styles.textButton}>
                            Добавить
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button,...setColor('red')}}
                                      onPress={subValue}>
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
            </View>
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
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 10,
    },
    textDisplay: {
        textAlign:'center',
        fontSize: 25,
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',

    },
})

export default MyPage;

