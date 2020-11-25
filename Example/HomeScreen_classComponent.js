// import React from "react";
// import {ImageBackground, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
// import {SafeAreaView} from "react-native-safe-area-context";
// import axios from 'axios';
// import { connect } from 'react-redux';
// import {userDataResponse,} from "../../Redux/Home/actions";
//
//
//
// const fon = require('../image/image2.jpg');
// const requestUserUrl = 'https://api.github.com/user';
//
//
// class HomeScreen extends React.Component {
//
//     componentDidMount() {
//         const { getDataName } = this.props;
//
//         axios.get(requestUserUrl, {
//                 headers: {
//                     Authorization: `token ${(this.props.token)}`,
//                     Accept: 'application/json'
//                 }
//             }
//         ).then(response => {
//             this.setUser(response.data);
//             const userData ={
//                 name: response.data.name,
//                 email: response.data.email,
//                 login: response.data.loading,
//                 url: response.data.url,
//             }
//         })
//             .catch(error => console.log(error))
//     }
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             user: {},
//         }
//
//     }
//
//     setUser = (data) => {
//         this.setState({
//             user: data
//         })
//     }
//
//     render () {
//
//         const { navigation, auth } = this.props
//         const { user } =this.state
//         console.log(auth);
//
//         return (
//             <SafeAreaView style={styles.main}>
//                 <ImageBackground source={fon} style={styles.image}>
//                     <View style={styles.buttonContainer}>
//                         <TouchableOpacity
//                             onPress={() => { navigation.navigate('Profile')}}
//                             style={styles.button}>
//                             <View>
//                                 <Text style={styles.textButton}>
//                                     Profile
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             onPress={() => navigation.navigate('Display')}
//                             style={styles.button}>
//                             <View>
//                                 <Text style={styles.textButton}>
//                                     Display
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             onPress={() => navigation.navigate('About')}
//                             style={styles.button}>
//                             <View>
//                                 <Text style={styles.textButton}>
//                                     About
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             onPress={() => navigation.navigate('Info')}
//                             style={styles.button}>
//                             <View>
//                                 <Text style={styles.textButton}>
//                                     Info
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.home}>
//                         <Text style={styles.text}>
//                             {`Welcome, ${user?.name}!
//                                 \nemail: ${user?.email},
//                                 \nlogin: ${user?.login},
//                                 \nurl: ${user?.url}`}
//                         </Text>
//                     </View>
//                 </ImageBackground>
//             </SafeAreaView>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     main: {flex:1},
//     home: {flex: 1, alignItems: 'center'},
//     image: {flex: 1, resizeMode: "cover", justifyContent: "center"},
//     text: {fontSize: 26, fontWeight: 'bold', textAlign: 'center', paddingTop: 50},
//     buttonContainer: {flexDirection: 'row', justifyContent: 'center',padding: 10,},
//     button: {borderWidth: 1, borderStyle: 'solid', borderRadius: 8, width: 75, height: 40, marginTop: 10, marginHorizontal: 13, backgroundColor:'lightgrey',},
//     textButton: {textAlign:'center', fontSize: 20, marginTop: 5, color: 'black', fontWeight: 'bold',},
// })
//
//
// const mapStateToProps = (state) => ({
//     user: state.auth.user,
//     token: state.auth.token,
//     auth: state.auth,
// });
//
// const mapDispatchToProps = {
//     getDataName: userDataResponse,
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
