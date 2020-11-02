import React from "react";
import {ImageBackground, StyleSheet, View, Text, Button} from 'react-native'


const image = { uri: "https://cdn.pixabay.com/photo/2020/09/03/12/34/flowers-5541118_960_720.jpg" };

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.main}>
            <ImageBackground source={image} style={styles.image}>
                    <View style={styles.button}>
                        <Button
                            title="Profile"
                            onPress={() => { navigation.navigate('Profile')}}
                        />
                        <Button
                            title="Display"
                            onPress={() => navigation.navigate('Display')}
                        />
                        <Button
                            title="Form"
                            onPress={() => navigation.navigate('Form')}
                        />
                        <Button
                            title="About"
                            onPress={() => navigation.navigate('About')}
                        />
                        <Button
                            title="Info"
                            onPress={() => navigation.navigate('Info')}
                        />
                    </View>
                    <View style={styles.home}>
                        <Text style={styles.text}>
                            Home page
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
        paddingTop: 10,
        justifyContent: 'center',
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
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    }
})


export default HomeScreen;