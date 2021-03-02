// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import React from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
// } from 'react-native';
//
// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// const StartPage: () => React$Node = () => {
//     return (
//         <>
//             <StatusBar barStyle="dark-content" />
//             <SafeAreaView>
//                 <ScrollView
//                     contentInsetAdjustmentBehavior="automatic"
//                     style={styling.scrollView}>
//                     <Header />
//                     {global.HermesInternal == null ? null : (
//                         <View style={styling.engine}>
//                             <Text style={styling.footer}>Engine: Hermes</Text>
//                         </View>
//                     )}
//                     <View style={styling.body}>
//                         <View style={styling.sectionContainer}>
//                             <Text style={styling.sectionTitle}>Step One</Text>
//                             <Text style={styling.sectionDescription}>
//                                 Edit <Text style={styling.highlight}>App.js</Text> to change this
//                                 screen and then come back to see your edits.
//                             </Text>
//                         </View>
//                         <View style={styling.sectionContainer}>
//                             <Text style={styling.sectionTitle}>See Your Changes</Text>
//                             <Text style={styling.sectionDescription}>
//                                 <ReloadInstructions />
//                             </Text>
//                         </View>
//                         <View style={styling.sectionContainer}>
//                             <Text style={styling.sectionTitle}>Debug</Text>
//                             <Text style={styling.sectionDescription}>
//                                 <DebugInstructions />
//                             </Text>
//                         </View>
//                         <View style={styling.sectionContainer}>
//                             <Text style={styling.sectionTitle}>Learn More</Text>
//                             <Text style={styling.sectionDescription}>
//                                 Read the docs to discover what to do next:
//                             </Text>
//                         </View>
//                         <LearnMoreLinks />
//                     </View>
//                 </ScrollView>
//             </SafeAreaView>
//         </>
//     );
// };
//
// const styling = StyleSheet.create({
//     scrollView: {
//         backgroundColor: Colors.lighter,
//     },
//     engine: {
//         position: 'absolute',
//         right: 0,
//     },
//     body: {
//         backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black,
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: Colors.dark,
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     footer: {
//         color: Colors.dark,
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//     },
// });
//
// export default StartPage;
