import React, {useEffect, useState} from "react";
import {ImageBackground, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {userDataResponse} from "../../Redux/Form/actions";


const fon = require('../image/image2.jpg');
const requestUserUrl = 'https://api.github.com/user';

const HomeScreen = ({navigation}) => {

    const [user, setUser] = useState(null)

    const userData = (user) => {
        setUser(user)
    }
    console.log(user)

    const token = useSelector(state => state.token.token);
    // const user = useSelector(state => state.token.user);
    // const dispatch = useDispatch();

    useEffect(() => {
        axios.get(requestUserUrl, {
                headers: {
                    Authorization: `token ${token}`,
                    Accept: 'application/json'
                }
            }
        ).then(response => {
            // dispatch(userDataResponse(response.data))
            userData(response.data)
            // console.log(response.data)
        })
            .catch(error => console.log(error))
    },[])

    return (
        <ImageBackground source={fon} style={styles.image}>
            <SafeAreaView style={styles.main}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Profile')}}
                        style={styles.button}>
                        <View>
                            <Text style={styles.textButton}>
                                Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Display')}
                        style={styles.button}>
                        <View>
                            <Text style={styles.textButton}>
                                Display
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}
                        style={styles.button}>
                        <View>
                            <Text style={styles.textButton}>
                                About
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Info')}
                        style={styles.button}>
                        <View>
                            <Text style={styles.textButton}>
                                Info
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.home}>
                    <Text style={styles.text}>
                        {`Welcome, ${user?.name}!
                                \nemail: ${user?.email}
                                \nlogin: ${user?.login}
                                \nurl: ${user?.url}`}
                    </Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
        );
    }

    const styles = StyleSheet.create({
        main: {flex:1},
        home: {flex: 1, alignItems: 'center'},
        image: {flex: 1, resizeMode: "cover", justifyContent: "center"},
        text: {fontSize: 26, fontWeight: 'bold', textAlign: 'center', paddingTop: 50},
        buttonContainer: {flexDirection: 'row', justifyContent: 'center',padding: 10,},
        button: {borderWidth: 1, borderStyle: 'solid', borderRadius: 8, width: 75, height: 40, marginTop: 10, marginHorizontal: 13, backgroundColor:'lightgrey',},
        textButton: {textAlign:'center', fontSize: 20, marginTop: 5, color: 'black', fontWeight: 'bold',},
    })

export default HomeScreen;

