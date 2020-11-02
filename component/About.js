import React from "react";
import {ImageBackground, StyleSheet, View, Text, Button} from 'react-native'


const image = { uri: "https://cdn.pixabay.com/photo/2020/10/20/14/49/bridge-5670640_960_720.jpg" };

const About = ({navigation}) => {

    return (
        <View style={styles.main}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.home}>
                    <Text style={styles.text}>
                        About
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    home: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        margin: -10,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    },
})


export default About;