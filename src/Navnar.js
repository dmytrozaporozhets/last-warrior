import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={styles.logo}/>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        padding: 15,
        borderColor: 'black',
        borderRadius: 15,
        borderWidth: 2,
        margin:15,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    logo: {
        width: 70,
        height: 70,
    },
})

export default Navbar;