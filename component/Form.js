import React, {useState} from 'react'
import {TextInput, View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert} from "react-native";

const image = { uri: "https://cdn.pixabay.com/photo/2020/10/23/12/07/beach-5678562_960_720.jpg" };

function Form({navigation}) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [comeIn, setComeIn] = useState('')

    const ComeIn = () => {
        if (login==="dimkazaporozhets" || password===12345) {
            setComeIn(() => {navigation.navigate('Account')})
        } else if (login==="" || password==="" ) {
            Alert.alert ('Логин или пароль не могут быть пустыми')
        } else {s
            Alert.alert ('Не верно указан логин или пароль')
        }
    }

    return (
        <View style={styles.main}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.block}>
                    <Text style={styles.textHeader}> Вход на сайт </Text>
                    <View style={styles.form}>
                        <Text style={styles.textInput}> Введите логин: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder ='Введите логин...'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={setLogin}
                            value={login}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.textInput}> Введите пароль: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder ='Введите пароль...'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={setPassword}
                            value={password}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.touchable}
                        onPress={ComeIn}
                    >
                        <Text style={styles.text}> Отправить </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create ({
    main: {
        flex:1,
    },
    block: {
        alignItems: 'center',
        marginBottom: 15,
        paddingTop:40,
    },
    input: {
        width: 300,
        padding: 10,
        backgroundColor: 'white',
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
    },
    touchable: {
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth: 1,
        height: 35,
        width: 300,
        backgroundColor: '#87ceeb',
        borderRadius: 10,
        marginTop: 10,
    },
    form: {
        paddingTop: 20,
    },
    textHeader: {
        fontSize: 35,
        fontWeight: 'bold',
        textTransform: 'uppercase',
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
        resizeMode: "cover",
        justifyContent: "center",
        margin: -10,
        paddingBottom: 340,
    },
})

export default Form;