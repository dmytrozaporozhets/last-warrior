import React from 'react'
import {View, Text, ImageBackground, StyleSheet, Button} from "react-native";

const image = {uri: 'https://cdn.pixabay.com/photo/2020/10/07/10/51/mountains-5634817_960_720.jpg'}

const MyPage = ({navigation}) =>  {
    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Welcome to My page
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

export default MyPage;

