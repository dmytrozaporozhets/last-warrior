import React from "react";
import {View, Text, StyleSheet, ImageBackground,} from 'react-native'

const image = { uri: "https://cdn.pixabay.com/photo/2020/10/22/19/26/rocks-5676982_960_720.jpg" };

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.component}>
                    <Text style={styles.text}> Welcome, Bro! </Text>
                </View >
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    component: {
        flex:1,
        paddingTop: 50,
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        margin: -10,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
})



export default ProfileScreen;