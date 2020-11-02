import React from 'react'
import {View, Text, ImageBackground, StyleSheet, Button} from "react-native";

const image = {uri: 'https://cdn.pixabay.com/photo/2020/10/13/05/31/sunset-5650773_960_720.jpg'}

const Account = ({navigation}) =>  {
    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Добро пожаловать на GitHub!
                    </Text>
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
        color: 'white',
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Account;

